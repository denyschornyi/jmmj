import React, { useState } from "react";
import "./app.css";

import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
    </div>
  );
}

export default App;
