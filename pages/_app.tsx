import React, { useCallback } from "react"
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { FirebaseApp, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
import { getStorage } from "firebase/storage"
import { GlobalStyles } from "@mui/material"
import Head from "next/head"

const firebaseConfig = {
	databaseURL: "https://bollard-website-default-rtdb.europe-west1.firebasedatabase.app/",
	storageBucket: ''
}

const globalStyles = {
	"*": {
		padding: 0,
		margin: 0,
	},
	"html, body": {
		height: "100vh",
		width: "100%",
	}
	
}

function MyApp({ Component, pageProps }: AppProps) {
	const app = initializeApp(firebaseConfig);


	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<GlobalStyles styles={globalStyles} />
			<Component {...{app, ...pageProps}} />
		</>
	);
}

export const useDb = (app: FirebaseApp) => {
	const db = getDatabase(app);

	return {
		db
	}
}

export const useStorage = (app: FirebaseApp) => {
	const storage = getStorage(app)

	return {
		storage
	}
}

export default MyApp
