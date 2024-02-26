import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './Home';
import {Error} from './ErrorModules/ErroreModule';
import {LoginFailed} from './Messages/ErrorMessages';
import {CreateFailed} from './Messages/ErrorMessages';
import {ResetPasswordFailed} from './Messages/ErrorMessages';
import {Test} from './TestAfterLogin';
import {DoLogin} from './LoginModules/DoLogin';
import {LoginContext} from './LoginContext';
import {motion} from 'framer-motion';
import { useContext, useState} from 'react';
import {ProductSearched} from './ListProductSearched';
import {ManageAccount} from './ManageAccountModule/ManagerAccount';
import './Style/StyleEmailForm.css';


export default function App({dataHome}) {
  

  const {datalogin, setDataLogin, inputSearch, setinputSearch} = useContext(LoginContext);
  

  var text = 'ACCEDI'; //testo da settare nell header 
  
  //se l utente è loggato
  if(Object.keys(datalogin).length !== 0) {
    console.log("datalogin" + datalogin.user.email);
    text = datalogin.user.email.toString().split('@')[0];
  }
  

  return (
  
    <Router>
        <Routes>
          <Route path="/" element=
          {
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}>
              <Home textForUser={text}
                  
                    dataPreview={dataHome}
                    />
            </motion.div>
          }/>
          
          
          <Route path="/test" element={<Test/>}/>
          <Route path="/DoLogin" element={<DoLogin/>}/>
          <Route path="/ManageAccount" element={<ManageAccount/>}/>


            <Route path="/ProductSearched" element={
              <ProductSearched 
                 
                                 textForUser={text}/>
                                 }/>

          <Route path="/Error_Login" element={<Error mex={LoginFailed}/>}/>
          <Route path="/Error_Reset" element={<Error mex={ResetPasswordFailed}/>}/>
          <Route path="/Error_Create" element={<Error mex={CreateFailed}/>}/>

        </Routes>

    </Router>    
  );
}
