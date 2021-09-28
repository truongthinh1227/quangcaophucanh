import React, {Component} from "react";

import News from './News';
import References from './References';
import Callyou from './Callyou';





function Lastnews() {
    return (

      <section className="home-area">
        <div className="home_content">
          <div className="container">
            <div className="row">

            
         <News />
         <References />
         <Callyou />


            </div>
          </div>
        </div>
      </section>
    );
  }


  
  export default Lastnews;