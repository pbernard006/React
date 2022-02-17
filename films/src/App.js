import react from 'react';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from './Home';
import Movie from './Movie';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div className="App container">
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies/:id' element={<Movie/>}/>

      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}


export default App;
