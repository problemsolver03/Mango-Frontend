import Home from "./components/Pages/HomePage/Home";
import Aboutus from "./components/Pages/Aboutus/Aboutus";
import ServiceDetails from "./components/Pages/ServiceDetails/ServiceDetails";
import Search from "./components/Pages/Search/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={Aboutus}></Route>
          <Route
            path="/servicedetails/:serviceId"
            component={ServiceDetails}
            exact
          ></Route>
          <Route path="/search/:query" component={Search} exact></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
