import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { FirebaseApp } from 'firebase/app';
import { DatabaseReference, DataSnapshot, get, ref as dRef, child } from "firebase/database";
import { getBytes, ref as sRef } from "firebase/storage";

import { useDb, useStorage } from '../_app';
import Bollard from "../api/bollard";

interface BollardPageProps {
	app: FirebaseApp
}

const BollardPage = ({ app }: BollardPageProps) => {
	const router = useRouter();
	const pid: string = router.query["id"] as string;
	const { db } = useDb(app);
	const { storage } = useStorage(app);

	const [ data, setData ] = useState<Bollard | undefined>();

	const dbRef = dRef(db);
	useEffect(() => {
		if(pid == undefined) return;

		// Query the database for information
		const bollard_id = parseInt(pid);
		get(child(dbRef, `bollards`)).then((snapshot: DataSnapshot) => {
			if(snapshot.exists()) {
				setData((snapshot.val() as Bollard[]).find((b) => b.id == bollard_id));
			} else {
				console.error(`No snapshot found for: ${pid}`);
			}
		});

		// Query storage for images.
		const pathRef = sRef(storage, `gs://bollard-website.appspot.com/bollards/${pid}/primary.jpg`);
		getBytes(pathRef).then((imageData) => {
			const bytes = new Uint8Array(imageData);
			const image =  `data:image/jpg;base64, ${Buffer.from(bytes).toString("base64")}`
			console.log({ ...data, image: image })
			setData((data) => data ? { ...data, image} : undefined);
		});

	}, [pid, dbRef, storage])

	return (
		<>
			{ data ? 
				<div>
					{data.name}
					<img src={data.image} alt={`An image of the ${data.name}`} width={200}/>
				</div> 
			:
				<div>
					Bollard {pid}
				</div> 
			}
		</>
	);
};

export default BollardPage;
