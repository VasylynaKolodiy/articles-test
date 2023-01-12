import React from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage/HomePage";
import ArticlePage from "./pages/ArticlePage/ArticlePage";

function App() {
  return (
    <div className='App container'>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/:id' element={<ArticlePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
