import react from 'react';
import {QueryClient, QueryClientProvider} from "react-query" ;
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from './Home';
import Movie from './Movie';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Favorite from './Favorite';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useState } from 'react';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { favoritesSlice } from "./slices";


const queryClient = new QueryClient() ;

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    favorites: favoritesSlice.reducer,
  })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

function App() {

  const [favorites, setFavorites] = useState([]);
  const addToFavorite = (id) => (event) => {
    event.preventDefault();
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
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
    </PersistGate>
    </Provider>
  );
}


export default App;
