import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';

import { Index } from './Index';
import { Header } from './Header';
import { Form_2 } from './Form_2';
import { Passport } from './Passport';

function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Index />}></Route>
        <Route exact path='form_2' element={<Form_2 />}></Route>
        <Route exact path='passport' element={<Passport />}></Route>
      </Routes>
    </>
  )
}

export default App
