import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop-page.component";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={Shop} />

      <Shop />
    </div>
  );
}

export default App;
