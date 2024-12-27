import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import  Signin  from './pages/Signin/Signin';
import { ForgotePassword } from './pages/ForgotPassword/ForgotePassword';
import { Signup } from './pages/Signup/Signup';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<Signin />} />
        <Route path='/forgotpassword' element={<ForgotePassword />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      </BrowserRouter>
     
>>>>>>> 47677da (Initial commit)
    </div>
  );
}

export default App;
