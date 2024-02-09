import React, { useState } from 'react';
/**
 * @TODO : da aggiungere una logica simile all'invio della mail di reset passwd
 */
export function TestPopUp() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <button onClick={openModal}>Apri Pop-up</button>

      {modalVisible && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '1em',
            width: '80%',
            maxWidth: '400px',
          }}>
            <h2>Titolo del Pop-up</h2>
            <p>Contenuto del Pop-up...</p>
            <button onClick={closeModal}>Chiudi Pop-up</button>
          </div>
        </div>
      )}
    </div>
  );
}

