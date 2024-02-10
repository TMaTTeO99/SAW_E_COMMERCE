import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './Home';
//import {MyProvider} from './LoginContext';
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
          
          <Route path="/test" element={<Test/>}
        />
          <Route path="/DoLogin" element={<DoLogin/>}/>

        </Routes>
      </switch>

    </Router>    
  );
}
