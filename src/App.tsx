import React from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage/HomePage";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className='App container'>
      <Navigation/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/favourites' element={<FavouritesPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
