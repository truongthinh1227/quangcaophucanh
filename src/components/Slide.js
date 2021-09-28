
import React, {Component} from "react";

function Slide() {
  return (




<div id="carousel-simple" className="carousel slide" data-ride="carousel">
{/* Indicators */}
<ol className="carousel-indicators">
  <li data-target="#carousel-simple" data-slide-to={0} className="active" />
  <li data-target="#carousel-simple" data-slide-to={1} />
  <li data-target="#carousel-simple" data-slide-to={2} />
  <li data-target="#carousel-simple" data-slide-to={3} />
</ol>
{/* Wrapper for slides */}
<div className="carousel-inner" role="listbox">
  <div className="item active">
    <img src="img/SLX.jpg" alt="" />
    <div className="carousel-caption">

  
      
  </div>



    </div>
    
  <div className="item">
    <img src="img/SL2.jpg" alt="" />
  </div>
  <div className="item">
    <img src="img/SL3.jpg" alt="" />
  </div>
  <div className="item">
    <img src="img/SL4.jpg" alt="" />
  </div>

{/* Controls */}
<a class="left carousel-control" href="#carousel-simple" role="button" data-slide="prev" style={{marginTop:"210px"}} >
        <i class="fa fa-chevron-left" aria-hidden="true" ></i>
      </a>
      <a class="right carousel-control" href="#carousel-simple" role="button" data-slide="next" style={{marginTop:"210px"}} >
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </a>



</div>




</div>



    
  );
}

  export default Slide;

