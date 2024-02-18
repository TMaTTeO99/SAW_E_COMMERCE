import React, { useRef } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export function UpLoadIMG() {
 /**
  *  const fileInput = useRef(); 

  const HandleUpLoad = (e) => {
    e.preventDefault();
    const file = fileInput.current.files[0];
    const storage = getStorage();
    var myRefStorage = ref(storage, 'img/products');
    const task = uploadBytesResumable(myRefStorage, file);
    task.on('state_changed', 
      (snapshot) => {
        // Visualizzo il caricamento del immagine
      },
      (error) => {
        // visualizzo messaggio di errore
      },
      () => {
        getDownloadURL(task.snapshot.ref).then((downloadURL) => {
          console.log("il file si trova nella seguente URL: " + downloadURL);  
        })
      }
    );
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.items) {
      for (var i = 0; i < e.dataTransfer.items.length; i++) {
        if (e.dataTransfer.items[i].kind === 'file') {
          fileInput.current.files = e.dataTransfer.files;
        }
      }
    }
  }


		<div id="UploadDiv" onDrop={handleDrop} onDragOver={handleDragOver}>
      <form id='UploadForm' onSubmit={HandleUpLoad}>
        <input type="file" ref={fileInput}/>
        <button type="submit">UP-LOAD</button>
      </form>
    </div>
  */

  return (
	<>
	</>
    
  );
}