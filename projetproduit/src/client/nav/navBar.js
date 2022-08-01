import React from 'react';
import {Link} from 'react-router-dom';

const NavbarClient = ()=>{
    

    return (

        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
          <a className='navbar-brand' href='#'>
            <img style={{"height" : "50px", "width" : "auto"}} src={require('./electrobyevologo.jpg')} alt='logo ElectroByEvo'></img>
           <label style={{"fontFamily": "cursive","color":"#0057A5" }}>ElectroByEvo</label>
           </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link style={{"fontFamily": "cursive","color":"#0057A5" }}  className="nav-link active" aria-current="page" to="/home">Home</Link>
                </li>
                {/* <li className="nav-item">
                  <Link style={{"fontFamily": "cursive","color":"#0057A5" }} className="nav-link" to="/login">Se connecter</Link>
                </li> */}
              </ul>
              {/* <div className="d-flex" >
                <Link className="nav-link" to="/login">Se connecter</Link>
              </div> */}
            </div>
          </div>
        </nav>
    );
}

export default NavbarClient;