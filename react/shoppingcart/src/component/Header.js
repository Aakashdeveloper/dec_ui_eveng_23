import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <header className="navbar navbar-bright navbar-fixed-top" role="banner">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">Home</Link>
            <Link to="/addProduct"  className="navbar-brand">Add Product</Link>
          </div>
          <nav className="collapse navbar-collapse" role="navigation">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/products">Products</Link>
               
              </li>
            </ul>
          </nav>
        </div>
      
      </header>
    )
}

export default Header