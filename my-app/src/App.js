import React from 'react';
import './App.css';
import NavBar from './Components/navBar/NavBar';
import Banner from './Components/Banner/banner';
import RowPost from './Components/RowPost/RowPost';
import {Action,original} from './url'
function App() {
  return (
    <div className="App">
   <NavBar/>
   <Banner/>
   <RowPost url={original} title='Netflix Originals'/>
   <RowPost url={Action} title='Action' isSmall/>
    </div>
  );
}

export default App;
