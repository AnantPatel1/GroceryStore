import "./App.css";
import Header from "./Components/Layout.js/Header";
import AboutUs from "./Components/AboutUs/AboutUs";
import Working from "./Components/AboutUs/Working";
import Pricing from "./Components/Pricing/Pricing";
import Boxes from "./Components/Meals/Boxes";
import Review from "./Components/Meals/Review";
function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Working />
      <Pricing />
      <Boxes />
      <Review />
    </div>
  );
}

export default App;
