import Home from "./components/Pages/HomePage/Home";
import Aboutus from "./components/Pages/Aboutus/Aboutus";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={Aboutus}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
