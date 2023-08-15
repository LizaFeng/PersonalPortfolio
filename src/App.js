import "./css/App.css";
import NavBar from "./components/navbar/NavBar.js";
import Footer from "./components/navbar/Footer";
import "../src/css/App.css";

function App() {
  return (
    <div className="App">
      <div class="navDiv">
        <NavBar />
      </div>
      <div className="main-content">{/* Your content goes here */}</div>
      <div className="footDiv">
        <Footer />
      </div>
    </div>
  );
}

export default App;
