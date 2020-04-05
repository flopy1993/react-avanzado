import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles.js";
import { Detail } from "./pages/Detail";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import "./App.css";
import { Logo } from "./components/Logo";
import { Home } from "./pages/Home";
import { Router } from "@reach/router";
import { NavBar } from "./components/NavBar";
import Context from './Context'




export const App = () => {

  //render props se suplanta por Context.Consumer
//   const UserLogged = ({ children }) => {
//     return children({ isAuth: false });
//   };
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
        </Router>
        <Context.Consumer>
        {({ isAuth }) =>
          isAuth 
          ? 
            <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
           : 
            <Router>
              <NotRegisteredUser path="/favs" />
              <NotRegisteredUser path="/user" />
            </Router>
          
        }
        </Context.Consumer>
      
      <NavBar />
    </div>
  );
};
