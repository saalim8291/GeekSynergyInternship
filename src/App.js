import logo from "./logo.svg";
import "./App.css";
import MovieList from "./Components/MovieList/MovieList";
import UserLogin from "./Components/UserLogin/UserLogin";
import UserSignUp from "./Components/UserSignUp/UserSignUp";

import { Route, BrowserRouter, Switch, Link, Redirect } from "react-router-dom";
import CompanyInfo from "./Components/CompanyInfo/CompanyInfo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <li><Link to='/movies'>Home</Link></li>
          <li><Link to='/about'>Company Info</Link></li>
        </nav>

        <Switch>
          <Route path='/movies'>
            <MovieList />
          </Route>
          <Route path='/login'>
            <UserLogin />
          </Route>
          <Route path='/about'>
            <CompanyInfo />
          </Route>
          <Route exact path="/">
            {localStorage.getItem('isLoggedIn') ? <Redirect to="/movies" /> : <UserSignUp />}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;