import logo from './logo.svg';
import './App.css';
import ServicesCard from './components/ServicesCard';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn Hussain
    //     </a>
    //   </header>
    //  </div>
  );
}

export default App;
