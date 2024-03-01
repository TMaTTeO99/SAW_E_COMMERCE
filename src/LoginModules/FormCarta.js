import back from '../Images/back.png';
export function FormCarta({sympleHandleBack,
							handleSubmitCard,
							cardNumber,
							setCardNumber,
							expiryDate,
							setExpiryDate,
							cvv,
							setCvv,
							cardHolderName, 
							setCardHolderName}) {


	return (
		<>
		<div id='divBack'>
			<img src={back} id='backID' onClick={sympleHandleBack}/>
			<button onClick={sympleHandleBack}> BACK</button>
		</div>
		
		<div className='CardFormDiv'>
			<h2 id='h2_3'>ISCRIVITI</h2>
			
			<div className='DivFormCard'>
				
				<form onSubmit={handleSubmitCard} id='formCard'>
		
					<label className='LabelsCard'>
						Numero della carta:
						<div className='DivInputInner'>
							<input className='inputCard' type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />	
						</div>
						
					</label>
					<label className='LabelsCard'>
						Data di scadenza (MM/YY):
						<div className='DivInputInner'>
							<input className='inputCard' type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
						</div>
						
					</label>
					<label className='LabelsCard'>
						CVV:
						<div className='DivInputInner'>
							<input className='inputCard' type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
						</div>
					</label>
					<label className='LabelsCard'>
						Nome del titolare della carta:
						<div className='DivInputInner'>
							<input className='inputCard' type="text" value={cardHolderName} onChange={(e) => setCardHolderName(e.target.value)} required />
						</div>
					</label>
					<div id='dive_btn_formCard_add' >
						<button id='btn_formCard_add' type='submit'>Aggiungi carta</button>
					</div>
				</form>
			</div>
		</div>
		</>
	);

}