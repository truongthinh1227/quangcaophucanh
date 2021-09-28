
import React, {Component} from "react";

function News() {
    return (
      <div>
        <div className="col-sm-12"><h2 className="sub_title">TIN TỨC</h2></div>
        <div className="home_list">
          <ul>
            <li className="col-md-3 col-sm-6 col-xs-12">
              <div className="thumbnail">
                <img src="img/h1.jpeg" alt="Post" />
                <div className="caption">
                  <h3><a href="#">Những mẫu tranh dán tường đẹp</a></h3>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                  <a href="#" className="btn btn-link" role="button">Chi tiết</a>
                </div>
              </div>                                        
            </li>
            <li className="col-md-3 col-sm-6 col-xs-12">
              <div className="thumbnail">
                <img src="img/h2.jpg" className="img-responsive" alt="Post" />
                <div className="caption">
                  <h3><a href="#">Top 5 mẫu chữ quảng cáo nổi bật 2021</a></h3>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                  <a href="#" className="btn btn-link" role="button">Chi tiết</a>
                </div>
              </div>                                        
            </li>
            <li className="col-md-3 col-sm-6 col-xs-12">
              <div className="thumbnail">
                <img src="img/h3.jpeg" className="img-responsive" alt="Post" />
                <div className="caption">
                  <h3><a href="#">Màu sắc trong thiết kế bao bì, nhãn mác</a></h3>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                  <a href="#" className="btn btn-link" role="button">Chi tiết</a>
                </div>
              </div>                                        
            </li>
            <li className="col-md-3 col-sm-6 col-xs-12">
              <div className="thumbnail">
                <img src="img/h4.jpeg" className="img-responsive" alt="Post" />
                <div className="caption">
                  <h3><a href="#">5 nguyên tắc thiết kế hình ảnh quảng cáo mà bạn nên biết</a></h3>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                  <a href="#" className="btn btn-link" role="button">Chi tiết</a>
                </div>
              </div>                                        
            </li>                                    
          </ul>
        </div>
      </div>
    );
  }

  export default News;