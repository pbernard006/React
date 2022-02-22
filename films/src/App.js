import react from 'react';
import {QueryClient, QueryClientProvider} from "react-query" ;
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from './Home';
import Movie from './Movie';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
import Header from './Header';
import Favorite from './Favorite';

const queryClient = new QueryClient() ;

function App() {

  const [favorites, setFavorites] = useState([]);
  const addToFavorite = (id) => (event) => {
    event.preventDefault();
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
    }
  };

  return (
    
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      
      <Header favorites={favorites}/>
      <div className='container'>
      <main>
          <Routes>
            <Route path="/" element={<Home addToFavorite={addToFavorite} favorites={favorites}/>} />
            <Route path="/movies/:id" element={<Movie addToFavorite={addToFavorite} favorites={favorites}/>} />
            <Route path='/favorites' element={<Favorite favorites={favorites}/>}/>
          </Routes>
        </main>
      </div>      
      </BrowserRouter>
    </QueryClientProvider>
  );
}


export default App;
