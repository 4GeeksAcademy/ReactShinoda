import React from "react";
import Navbar from "../Navbar"; // Ajusta la ruta si es necesario
import Header from "../Header";
import Cards from "../Cards";


const Home = () => {
  return (
    <div className="text-center">
      <Navbar />
      <Header />
	  <Cards />    
    </div>
  );
};

export default Home;