import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';

import { Index } from './Index';
import { Header } from './Header';
import { Form_2 } from './Form_2';
import { Passport } from './Passport';
import { Licence } from './Licence';
import { Stcw } from './Stcw';
// import { Seafeverdec } from './Seafeverdec';
import { Experience } from './Experience';
import { Physicaldetails } from './Physicaldetails';
import { Officialuse } from './Officialuse';
import { Continuous } from './Continuous';

function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Index />}></Route>
        <Route exact path='form_2' element={<Form_2 />}></Route>
        <Route exact path='passport' element={<Passport />}></Route>
        <Route exact path='licence' element={<Licence />}></Route>
        <Route exact path='stcw' element={<Stcw />}></Route>
        {/* <Route exact path='seafeverdec' element={<Seafeverdec />}></Route> */}
        <Route exact path='experience' element={<Experience />}></Route>
        <Route exact path='physicaldetails' element={<Physicaldetails />}></Route>
        <Route exact path='officialuse' element={<Officialuse />}></Route>
        <Route exact path='continuous' element={<Continuous />}></Route>
      </Routes>
    </>
  )
}

export default App
