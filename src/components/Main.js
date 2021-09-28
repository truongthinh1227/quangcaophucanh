import React, {Component} from "react";

import Slide from './Slide';
import Talent from './Talent';
import Service from './Service';
import Printservice from './Printservice';
import Lastnews from './Lastnews';

function Main() {
    return (
      <div >
        
      <Slide />
      <Talent />
      <Service />
      <Printservice />
      <Lastnews />
    </div>
    );
  }
  
  export default Main;