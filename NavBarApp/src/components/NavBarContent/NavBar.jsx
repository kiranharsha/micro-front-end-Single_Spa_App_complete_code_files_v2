import React, { Suspense } from "react";
// import RoutingContext from "../../utils/RoutingProvider";
// import "./HomeContent.scss";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./NavBar.scss";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
const NavBar = (props) => {
  // console.log("kiran", routing)
  // let {  BrowserRouter, Link, Route, Switch} = routing ;
  const SeatSelectionPage = React.lazy(() =>
    import("seatselection/SeatSelection")
  );
  // const HomePage = React.lazy(() => import("homepage/HomePage"));
  return (
    // *********************
    <BrowserRouter>
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li>
            <Link to="/">New account</Link>
          </li>

          <li>
            <Link to="/stuff">Move</Link>
          </li>
          <li>
            <Link to="/contact">Change</Link>
          </li>
          <li>
            <Link to="#">Search Order</Link>
          </li>
          <li>
            <Link to="#">Manage Services</Link>
          </li>
          <li>
            <Link to="#">Manage Smartcard</Link>
          </li>
        </ul>
        <div className="content">
        {/* {props.ki} */}
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/">
              <Suspense fallback={null}>
                <HomePage></HomePage>
              </Suspense>
            </Route> */}
            <Route path="/stuff">
              <Suspense fallback={null}>
                <SeatSelectionPage></SeatSelectionPage>
              </Suspense>
            </Route>
            {/* <Route path="/stuff" component={Stuff}/> */}
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default NavBar;
