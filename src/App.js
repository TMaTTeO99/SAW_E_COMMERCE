import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './Home';
import {MyProvider} from './LoginContext';
import {Test} from './TestAfterLogin';


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



        </Routes>
      </switch>

    </Router>    
  );
}
