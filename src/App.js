
import './App.css';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/Pages/Login';
import Forgot from './components/Pages/Forgot';
import Register from './components/Pages/Register';
import Mainfunc from './Mainfunc';


function App() {
  return<>
  <Router>
  <Routes>
    <Route path='/login' element={<Login />} />
    <Route path='/forgot-password' element={<Forgot />} />
    <Route path='/register' element={<Register />} />
    <Route path='/*' element={<Mainfunc />} />
  </Routes>
  </Router>
  </>
}


export default App;
