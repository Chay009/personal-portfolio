/* eslint-disable react/no-unescaped-entities */

import "./App.css";


import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
 <ScrollToTop/>
  <Aside/>

  <div className="main-content">
    <Navbar/>
    <section style={{ scrollBehavior: "smooth", border: "1px solid var(--jet)", margin: "auto" }}>
  <Outlet/>
</section>


  </div>


     
    </>
  );
}

export default App;
