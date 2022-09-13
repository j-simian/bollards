import React, { useCallback } from "react"
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { FirebaseApp, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
	databaseURL: "https://bollard-website-default-rtdb.europe-west1.firebasedatabase.app/",
	storageBucket: ''
}

function MyApp({ Component, pageProps }: AppProps) {
	const app = initializeApp(firebaseConfig);
	return <Component {...{app, ...pageProps}} />
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
