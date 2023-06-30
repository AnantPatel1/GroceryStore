import "./App.css";
import Header from "./Components/Layout.js/Header";
import AboutUs from "./Components/AboutUs/AboutUs";
import Working from "./Components/AboutUs/Working";
import Pricing from "./Components/Pricing/Pricing";
function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Working />
      <Pricing />
    </div>
  );
}

export default App;
