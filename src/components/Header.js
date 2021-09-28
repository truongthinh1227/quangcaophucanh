


function Header() {
      return (
  
        <header className="site-header">
          <div className="top">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <p>CÔNG TY TNHH QUẢNG CÁO PHÚC ANH</p>
                </div>
                <div className="col-sm-6">
                  <ul className="list-inline pull-right">
                    <li><a href="tel:+84901363638"><i className="fa fa-phone" /> 0901 3636 38</a></li>
                    <li><a href="mailto:quangcaophucanh@gmail.com"><i className="fa fa-envelope-o" /> quangcaophucanh@gmail.com</a></li>
                  
                  
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                  
                  </ul>                        
                </div>
              </div>
            </div>
          </div>
          <nav className="wrapper-nav navbar-default">
            <div className="container">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-collapse">
                <span className="sr-only"></span>
                <i className="fa fa-bars" />
              </button>
              <a href="index.html" className="navbar-brand">
                <img src="img/sa.jpg" alt="Post" />
              </a>
              {/* Collect the nav links, forms, and other content for toggling */}
              <div className="collapse navbar-collapse" id="bs-navbar-collapse">
                <ul className="nav navbar-nav main-navbar-nav">
                  <li className="active"><a href="index.html" title>TRANG CHỦ</a></li>
                 
                  <li><a href="page.html" title>GIỚI THIỆU</a></li>
                  <li><a href="category.html" title>DỊCH VỤ</a></li>
                  <li><a href="#" title>DANH MỤC THI CÔNG</a></li>
                  <li><a href="#" title>TIN TỨC</a></li>
                  <li><a href="#" title>LIÊN HỆ</a></li>
                </ul>                           
              </div>{/* /.navbar-collapse */}                
              {/* END MAIN NAVIGATION */}
            </div>
          </nav>        
        </header>
      );
    }

    export default Header;
  