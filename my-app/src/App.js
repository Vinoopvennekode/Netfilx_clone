import React from 'react';
import './App.css';
import NavBar from './Components/navBar/NavBar';
import Banner from './Components/Banner/banner';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div className="App">
   <NavBar/>
   <Banner/>
   <RowPost/>
    </div>
  );
}

export default App;
