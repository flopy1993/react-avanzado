import React, { Fragment } from 'react';
import { GlobalStyle} from './styles/GlobalStyles.js'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCard } from './container/ListOfPhotoCard'
import {PhotoCardWithQuery} from './container/PhotoCardWithQuery'
import './App.css';
import { Logo } from './components/Logo'

export const App = () =>{ 
  //string del url
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <div>
    <GlobalStyle />
    <Logo />
    {
      detailId 
      ?
      <PhotoCardWithQuery id={detailId}/>
      :
      <Fragment>
  <ListOfCategories />
      <ListOfPhotoCard  categoryId={2}/>
      </Fragment>
    
    }
   
    </div>
   
  );
}




