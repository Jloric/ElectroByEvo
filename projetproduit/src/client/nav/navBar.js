import React from 'react';
import {Link} from 'react-router-dom';

const NavbarClient = ()=>{
    

    return (

        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
          <a className='navbar-brand bg-info p-2'style={{"height" : "115px", "width" : "90%"}} href='#'>
            <img style={{"height" : "100px", "width" : "auto"}} src={require('./electrobyevologo.jpg')} alt='logo ElectroByEvo'></img>
           <label style={{"fontFamily": "cursive"}}>ElectroByEvo</label>
           </a>


            <div  id="navbarSupportedContent">
              <ul className="navbar-nav p-3 m-auto  ">
                <li className="nav-item">
                  <Link style={{"fontFamily": "cursive","color":"#0057A5" }}  className="nav-link active" aria-current="page" to="/home">Home</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
}

export default NavbarClient;