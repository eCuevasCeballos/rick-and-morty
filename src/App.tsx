import React, { useState } from "react";
import NavBar from './components/NavBar';
import AboutComponent from './components/About'
import CharactersComponent from "./components/Characters";
import LocationsComponent from "./components/Locations";
import EpisodesComponent from "./components/Episodes";

function App() {

  const [activeComponent, setActiveComponent] = useState<string>("About");

  const renderComponent = () => {
    switch (activeComponent) {
      case "About":
        return <AboutComponent />
      case "Characters":
        return <CharactersComponent />;
      case "Locations":
        return <LocationsComponent />;
      case "Episodes":
        return <EpisodesComponent />;
      default:
        return null;
    }
  };

  return (
    
  <div>
      <NavBar activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
      <div className="container mx-auto mt-4">{renderComponent()}</div>
    </div>
    
  
  
  );
}

export default App;
