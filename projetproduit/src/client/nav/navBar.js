import React from 'react';
import {Link} from 'react-router-dom';

const NavbarClient = ()=>{
    

    return (

        <nav className="navbar bg-light">
          <div className="container-fluid">
          <a className='navbar-brand bg-info p-2' href='#' style={{height : "115px" , width : "90%"}}>
            <img style={{"height" : "100px", "width" : "auto"}} src={require('./electrobyevologo.jpg')} alt='logo ElectroByEvo'></img>
           <label style={{"fontFamily": "cursive","color":"#0057A5" }}>ElectroByEvo</label>
           </a>

            <div className="" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                {/* <li className="nav-item">
                  <Link style={{"fontFamily": "cursive","color":"#0057A5" }} className="nav-link" to="/login">Se connecter</Link>
                </li> */}
              </ul>
              <div className="d-flex" >
                 <Link  className="nav-link active" aria-current="page" to="/home">Home</Link>
              </div>
            </div>
          </div>
        </nav>
    );
}

export default NavbarClient;