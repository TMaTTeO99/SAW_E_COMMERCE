import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './Home'

export default function App() {
  return (

    <Router>
      <switch>
        <Routes>
          <Route path="/" element={<Home/>}/>
        


        </Routes>
      </switch>

    </Router>    
  );
}
