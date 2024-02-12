import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './Home';
import {Error} from './ErrorModules/ErroreModule'
import {LoginFailed} from './Messages/ErrorMessages'
import {CreateFailed} from './Messages/ErrorMessages'
import {ResetPasswordFailed} from './Messages/ErrorMessages'

import {Test} from './TestAfterLogin';
import {DoLogin} from './LoginModules/DoLogin'
import './Style/StyleEmailForm.css';
import {motion} from 'framer-motion';
export default function App() {
  

  return (
  
    <Router>
      <switch>
        <Routes>
          <Route path="/" element=
          {
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}>
              <Home/>
            </motion.div>
          }/>
          
          <Route path="/test" element={<Test/>}/>
          <Route path="/DoLogin" element={<DoLogin/>}/>
          
          
          
          
          
          <Route path="/Error_Login" element={<Error mex={LoginFailed}/>}/>
          <Route path="/Error_Reset" element={<Error mex={ResetPasswordFailed}/>}/>
          <Route path="/Error_Create" element={<Error mex={CreateFailed}/>}/>


        </Routes>
      </switch>

    </Router>    
  );
}
