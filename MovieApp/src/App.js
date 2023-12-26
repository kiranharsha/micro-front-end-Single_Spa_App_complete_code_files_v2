import React, { Suspense } from "react";
import "./App.scss";
import { Switch, Route, useHistory, useLocation,Link,BrowserRouter } from "react-router-dom";
import HeaderPage from "./components/HeaderPage";
const HomePage = React.lazy(() => import("homepage/HomePage"));
const DetailsPage = React.lazy(() => import("detailspage/DetailsPage"));
const SeatSelectionPage = React.lazy(() => import("seatselection/SeatSelection"));
const NavBarPage = React.lazy(() => import("navbarpage/NavBarPage"));


const App = () => {
  const history = useHistory();
  const location = useLocation();

  const movieClicked = (movie) => {
    history.push(`details/${movie.id}`);
  };

  return (
    <div>  
       {/* <Suspense fallback={null}>
       <NavBarPage />
       </Suspense> */}
     <HeaderPage />
  
    <Switch>
      <Route path="/details/:id">
        <Suspense fallback={null}>
          <DetailsPage location={location}></DetailsPage>
        </Suspense>
      </Route>
      <Route path="/book">
        <Suspense fallback={null}>
          <SeatSelectionPage></SeatSelectionPage>
        </Suspense>
      </Route>
      <Route exact path="/">
        <Suspense fallback={null}>
        <NavBarPage  routing={{ BrowserRouter, Link, Route, Switch}}/>
          <HomePage
            movieClicked={movieClicked}
            routing={{ history, location }}
          ></HomePage>
        </Suspense>
      </Route>
    </Switch>
    </div>
  );
};

export default App;
