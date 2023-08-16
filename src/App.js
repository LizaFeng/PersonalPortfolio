import "./css/App.css";
import NavBar from "./components/navbar/NavBar.js";
import Footer from "./components/navbar/Footer";
import "../src/css/App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <div className="navDiv">
        <NavBar />
      </div>
      <div className="main-content">
        <Home />
      </div>
      <div className="footDiv">
        <Footer />
      </div>
    </div>
  );
}

export default App;
