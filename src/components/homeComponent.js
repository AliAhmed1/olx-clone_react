import React from 'react';
import '../App.css';
// import Header from './header'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPicture from './mainPicture'
import DisplayCard from './displayCards';
// import Footers from './footer';

function HomeComponent() {
  return (
    <div>
      <MainPicture />
      <DisplayCard/> 
    </div>
  );
}

export default HomeComponent;
