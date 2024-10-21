import { Route, Routes } from "react-router-dom";
import { useState } from 'react'
import './App.scss'


import Home from "./components/Home.jsx";
import Layout from "./components/Layout.jsx";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  )
}

export default App
