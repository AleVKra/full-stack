import ListEmployeeComponent from './components/ListEmployeeComponent'
import './App.css'
import React from "react";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";


function App() {

  return (
    <>
      <HeaderComponent/>
      <ListEmployeeComponent />
      <FooterComponent/>
    </>
  )
}

export default App
