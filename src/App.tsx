import HeaderComponent from "./components/Header"
import CharactersComponent from "./components/Characters";
import AboutComponent from "./components/About"


function App() {


  return (    
  
    <div>
      <header>
        <HeaderComponent />
      </header>
      <main className="md:flex md:justify-center my-16">
        <CharactersComponent />
        <AboutComponent />
      </main>
      
    </div>
  
  );
}

export default App;
