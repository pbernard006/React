import react from 'react';
import {QueryClient, QueryClientProvider} from "react-query" ;
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from './Home';
import Movie from './Movie';
import 'bootstrap/dist/css/bootstrap.min.css'


const queryClient = new QueryClient() ;

function App() {
  
  console.log("env : "+process.env.REACT_APP_API_KEY)
  return (
    <div className="App container">
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies/:id" element={<Movie />} />
          </Routes>
        </main>
      </BrowserRouter>
    </QueryClientProvider>
    </div>
  );
}


export default App;
