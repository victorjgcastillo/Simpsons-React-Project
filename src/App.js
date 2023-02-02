
import './App.css';
import axios from 'axios';
//import {Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from 'react';
import Paginator from './components/Paginator/Paginator';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
//import Card from './components/Card';

function App() {
  const [page,  setPage] = useState(2)
  const [characters, setCharacters] = useState([])
  const getCharacters = async ()=>{
    const res = await axios.get(`https://thesimpsonsquoteapi.glitch.me/quotes?count=15`)
    console.log(res.data);
    setCharacters(res.data)
  }
  useEffect(()=>{
    getCharacters(page)
  }, [page])
  return (
    <div className="app">
    <Header></Header>
    <Paginator page = {page} setPage={setPage}/>
    <Gallery characters = {characters}/>
     
    </div>
  );
}

export default App;
