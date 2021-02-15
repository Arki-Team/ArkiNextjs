import React, { useState } from "react";
import "../styles/global.less";
import '../styles/fonts.css'

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const App = ({ Component, pageProps }) => {
  const [isOpen, SetIsOpen] = useState(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Component {...pageProps} />
 
      
    </>
  );
};

export default App;
