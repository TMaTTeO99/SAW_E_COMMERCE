
import { collection, addDoc, getDocs, getDoc, query, where} from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import { app } from './LoginModules/LoginConfig';


import levenshtein from 'js-levenshtein';


///////////////////////////////////////////////////////
import {Preview} from "./TempDataProduct";
//////////////temp

function correctInput(input, dictionary) {

	// Se l'input dell'utente è nel dizionario, restituisci l'input così com'è
	if (dictionary.includes(input)) {
	  return input;
	}  
	// Altrimenti, trova la parola nel dizionario che è più "vicina" all'input dell'utente
	// Questo è solo un esempio e potrebbe non funzionare per tutti i casi
	let closestWord = dictionary[0];
	let closestDistance = levenshtein(input, closestWord);
  
	for (let i = 1; i < dictionary.length; i++) {
	  const distance = levenshtein(input, dictionary[i]);
	  if (distance < closestDistance) {
		closestWord = dictionary[i];
		closestDistance = distance;
	  }
	}
	console.log("parola trovata: " + closestWord);
	return closestWord;
} 


export async function upload() {

	
	const db = getFirestore(app);
	try {
		/*catalogo.scarpe.bambino.forEach(async (obj) => {
			const docRef = await addDoc(collection(db, "scarpe"), obj);
			console.log("Document written with ID: ", docRef.id);
		});*/
		const docRef = await addDoc(collection(db, "preview"), Preview);
		console.log("Document written with ID: ", docRef.id);
	} 
	catch (e) {
		console.error("Error adding document: ", e);
	}
	

}

///////////////////////////////////////////////////////

export async function getPreview(){
	
	const db = getFirestore(app);
	
	try {
		const snapshot = await getDocs(collection(db, "preview"));
		//console.log(snapshot.docs[0].data().payload);
		return snapshot.docs[0].data().prodotti;
	}
	catch(e) {
		console.log(e);
		//in caso di errore ritono un dizionario fittizio
		return [];
	}
}

export async function getDictionary() {

	const db = getFirestore(app);
	
	try {
		const snapshot = await getDocs(collection(db, "dizionario"));
		console.log(snapshot.docs[0].data().payload);
		return snapshot.docs[0].data().payload;
	}
	catch(e) {
		console.log(e);
		//in caso di errore ritono un dizionario fittizio
		return new ["maglietta", "camicia", "pantaloni", "jeans", "giacca", "cappotto", "scarpe"];
	}
}

async function checkGender(processedWords) {

	var tmp = -1;
	await getGender().then((genders) => {
		genders.forEach((gender) => {
			if(processedWords.findIndex(x => x === gender) > -1)tmp = processedWords.findIndex(x => x === gender);
		});
	})
	return tmp;
}
async function checkProduct(processedWords) {

	var tmp = -1;
	await getProductType().then((productArray) => {
		productArray.forEach((product) => {
			if(processedWords.findIndex(x => x === product) > -1)tmp = processedWords.findIndex(x => x === product);			
		});
	});
	return tmp;
}

async function getGender() {

	const db = getFirestore(app);
	
	try {
		const snapshot = await getDocs(collection(db, "gender"));
		//console.log(snapshot.docs[0].data().payload);
		return snapshot.docs[0].data().payload;
	}
	catch(e) {
		console.log(e);
		//in caso di errore ritono un dizionario fittizio
		return new ["uomo", "donna", "bambino"];
	}

}
export async function getProductType() {

	const db = getFirestore(app);
	
	try {
		const snapshot = await getDocs(collection(db, "product"));
		//console.log(snapshot.docs[0].data().payload);
		return snapshot.docs[0].data().payload;
	}
	catch(e) {
		console.log(e);
		//in caso di errore ritono un dizionario fittizio
		return new ["scarpe", "maglie", "pantaloni"];
	}

}

function doQueryProductGender(processedWords, db, product, gender){

	

	return query(collection(db, product),
	where("genere", "==", gender), where("description", "array-contains-any", processedWords));
}

async function getDataForProductGender(processedWords, flagProduct, flagGender, db) {
	
	var data = [];

	const querySnapshotMaglie = await getDocs(doQueryProductGender(processedWords, db, processedWords[flagProduct], processedWords[flagGender]));
	
	querySnapshotMaglie.forEach((doc) => {
		console.log("qui " + doc.data());
		data.push(doc.data());
	});	
	return data;
}


function doQueryProduct(processedWords, db, product){

	const q = query(collection(db, product),
	where("description", "array-contains-any", processedWords));

	console.log(q);

	return q;
}

async function getDataProduct(processedWords, flagProduct, db) {

	var data = [];
	
	const querySnapshotMaglie = await getDocs(doQueryProduct(processedWords, db, processedWords[flagProduct]));
	
	console.log(querySnapshotMaglie);
	querySnapshotMaglie.forEach((doc) => {
		console.log("i dati: " + doc.data());
		data.push(doc.data());
	});	
	
	return data;

}


function doQuery(processedWords, db, product) {

	return query(collection(db, product),
	where("description", "array-contains-any", processedWords));		
}
async function getDataGenerics(processedWords, db) {

	
	var data = [];
	const querySnapshotScarpe = await getDocs(doQuery(processedWords, db, "scarpe"));
	const querySnapshotPantaloni = await getDocs( doQuery(processedWords, db, "pantaloni"));
	const querySnapshotMaglie = await getDocs( doQuery(processedWords, db, "maglie"));
	
	querySnapshotMaglie.forEach((doc) => {
		data.push(doc.data());
	});	
	querySnapshotPantaloni.forEach((doc) => {
		data.push(doc.data());
	});
	
	querySnapshotScarpe.forEach((doc) => {
		data.push(doc.data());
	});
	
	return data;
}

function doQueryGender(product, processedWords, gender, db){

	
	return query(collection(db, product), 
	where("genere", "==", gender),
	where("description", "array-contains-any", processedWords));
	
} 
async function getDataForGender(processedWords, flagGender, db){

	
	var data = [];
	const querySnapshotMaglie = await getDocs(doQueryGender("maglie", processedWords, processedWords[flagGender], db));
	const querySnapshotPantaloni = await getDocs( doQueryGender("pantaloni", processedWords, processedWords[flagGender], db));
	const querySnapshotScarpe = await getDocs( doQueryGender("scarpe", processedWords, processedWords[flagGender], db));
	
	
	querySnapshotMaglie.forEach((doc) => {
		data.push(doc.data());	
	});
	querySnapshotPantaloni.forEach((doc) => {
		data.push(doc.data());
	});
	querySnapshotScarpe.forEach((doc) => {
		data.push(doc.data());
	});
	return data;

}

//in e ci sono i dati che l utente inserisce nella form
export async function fetchData(userInput) {

	const db = getFirestore(app);
	var flagProduct = -1, flagGender = -1;
	var data;
	var finale;
	finale = await getDictionary().then(async (dizionario) => {

	
		var processedWords = [];

		userInput.forEach((word) => {
			processedWords.push(correctInput(word, dizionario));
		})
		console.log("dati corretti:")
		processedWords.forEach((word) => console.log(word));


		flagProduct = await checkProduct(processedWords);
		
		console.log("flagProduct " + flagProduct);

		//caso in cui l utente non ha inserito il prodotto

		if(flagProduct === -1){

			//controllo se l utente ha inserito il genere
			

			flagGender = await checkGender(processedWords);
			
			/**
			 * caso in cui non ha inserito il genere
			 */
			if(flagGender === -1){
				console.log("no gender");
				var data;
				await getDataGenerics(processedWords, db).then((d) => data = d);
				return data;
				
			}

			data = await getDataForGender(processedWords, flagGender, db).then((d) => data = d);
			return data;
		}
		/**
		 * caso in cui è stato inserito il prodotto
		 */
		flagGender = await checkGender(processedWords);

		if(flagGender === -1){
			console.log("ok");
			//faccio le query sul prodotto ma non sul genere
			
			await getDataProduct(processedWords, flagProduct, db).then((d) => data = d);
			return data;
			
		}
		/**
		* caso in cui il genere è stato inserito
		*/
			
		//faccio le query sul prodotto e sul genere
		
		data = await getDataForProductGender(processedWords, flagProduct, flagGender, db).then((d) => data = d);
		return data;

	})
	.catch((err) => {
		console.log("errore dizionario " + err);
		return [];
	});	
	return finale;
}