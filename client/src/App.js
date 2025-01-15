import logo from './logo.svg';
import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import  Signin  from './pages/Signin/Signin';
import { ForgotePassword } from './pages/ForgotPassword/ForgotePassword';
import { Signup } from './pages/Signup/Signup';
import { Dashboard } from './pages/dashboard/Dashboard';
import { JobFinder } from './pages/JobFinder/JobFinder';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<Signin />} />
        <Route path='/forgotpassword' element={<ForgotePassword />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/Jobs' element={<JobFinder />} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
