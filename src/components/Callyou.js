
import React, {Component} from "react";

function Callyou() {
    return (

      <div className="col-sm-3">
        <h2 className="sub_title w10"> NHẬN BÁO GIÁ NHANH </h2>
        <div className="clearfix" />
        <div className="login-form-1">
          <form id="login-form" className="text-left">
            <div className="login-form-main-message" />
            <div className="main-login-form">
              <div className="login-group">
                <div className="form-group">
                  <label htmlFor="ad" className="sr-only">Tên</label>
                  <input type="text" className="form-control" id="ad" name="ad" placeholder="Tên" />
                </div>
                <div className="form-group">
                  <label htmlFor="tel" className="sr-only">Số điện thoại</label>
                  <input type="text" className="form-control" id="tel" name="tel" placeholder="Số điện thoại" />
                </div>
              </div>
              <button type="submit" className="login-button"><i className="fa fa-chevron-right" /></button>
            </div>
          </form>
        </div>                            
      </div>
    );
  }

  export default Callyou;