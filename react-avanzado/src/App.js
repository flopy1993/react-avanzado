import React from 'react';
import { GlobalStyle} from './styles/GlobalStyles.js'
import {Detail} from './pages/Detail'
import './App.css';
import { Logo } from './components/Logo'
import {Home} from './pages/Home'
import {Router} from '@reach/router'

export const App = () =>{ 
  
  return (
    <div>
    <GlobalStyle />
    <Logo />
    <Router>
        <Home path='/'/>
        <Home path='/pet/:categoryId'/>
        <Detail path='/detail/:detailId'/>
      </Router>
    </div>
   
  );
}




