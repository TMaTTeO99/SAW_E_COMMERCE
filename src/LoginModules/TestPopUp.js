import back from '../Images/back.png';
import '../Style/Back.css';
import '../Style/StylePopUpSendMail.css';

export function TestPopUp({resetPopUp}) {


  return (
    <div>
        <div id='confirmRestDiv'>
		      <div id='divBack'>
		      	<img src={back} id='backID' onClick={resetPopUp}/>
		      	<button onClick={resetPopUp}>BACK</button>
		      </div>
          <div >
            <h2>Email inviata</h2>
          </div>
        </div>
    </div>
  );
}

