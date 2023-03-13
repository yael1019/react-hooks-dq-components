import React from "react";
import SideMenu from "./SideMenu";
import MainContent from "./MainContent";
import TopMenu from './TopMenu';

function App() {
  return (
  <div className="app-container">
    <TopMenu />
    <MainContent />
    <SideMenu />
  </div>
  )
}

export default App;
