import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './Home';
import {MyProvider} from './LoginContext';
import {Test} from './TestAfterLogin';
import {DoLogin} from './DoLogin'
import './Style/StyleEmailForm.css';
import {CreateAccount} from './CreateAccount';

export default function App() {
  
  

  
  
  return (
  
    <Router>
      <switch>
        <Routes>
          <Route path="/" element=
          {<MyProvider>
            <Home/>
          </MyProvider>}/>
          
          <Route path="/test" element=
          {<MyProvider>
            <Test/>
          </MyProvider>}/>
          <Route path="/DoLogin" element=
          {<MyProvider>
            <DoLogin/>
          </MyProvider>}/>

          <Route path="/CreateAccount" element=
          {<MyProvider>
            <CreateAccount/>
          </MyProvider>}/>



        </Routes>
      </switch>

    </Router>    
  );
}
