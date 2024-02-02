import Navbar from './Component/Navbar'
import Home from './Component/Home';
import About from './Component/About';
import Footer from './Component/Footer';
import Action from './Component/Action';
import "./App.css"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Action />
      <Footer />
    </div>
  );
}

export default App;
