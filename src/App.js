import logo from './logo.svg';
import './App.css';
import NavBar from './components/MyNavBar/NavBar';
import {Route,Routes} from 'react-router-dom'
import FilmList from './components/FilmList/FilmList'
import FilmDetail from './components/FilmDetail/FilmDetail'
import Modal  from './components/Modal/Modal';
import React, {useState} from 'react'
 

function App() {
  const [GetData, SetGetData] = useState([])

  return (
    <div >
     <NavBar/>
     <Routes>
<Route index element={<FilmList/>}></Route>
<Route path='/detail/:id' element={<FilmDetail/>}></Route>




     </Routes>
     <Modal SetGetData={SetGetData}/>




    </div>
  );
}

export default App;
