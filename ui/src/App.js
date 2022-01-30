import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {Dashboard} from './Dashboard';
import {Data} from './Data';
import {Photo} from './Photo';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h1 className="d-flex justify-content-center m-3">
        Smart Growth Chamber Monitoring App
      </h1>
        
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/home">
              Home
            </NavLink>
          </li>
		  <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/data">
              Data
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/photo">
              Photo
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
		<Route path='/data' element={<Data />}/>
        <Route path='/photo' element={<Photo />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
