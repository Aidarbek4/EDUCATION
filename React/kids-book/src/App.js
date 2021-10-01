import React from "react";
import './App.scss';
import { Header, Content } from "./assets/components";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
