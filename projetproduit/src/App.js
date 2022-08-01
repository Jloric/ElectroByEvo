import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Listproduits from './client/dao/listProduits-dao';
import GetProduitById from './client/dao/produit-dao';
import NavbarClient from './client/nav/navBar';
import Footer from './footer';

function App() {
  return (
    <>

    <NavbarClient/>

    <div className="container border p-3 my-5 "style={{"background-color":" rgba(112, 210, 255,0.2)"}}>

      <Routes>
        <Route path="/home"  exact element={<Listproduits/>}/>
        <Route path="/product/:idProduit" exact element={<GetProduitById />} />
        {/* <Route path="/login" exact element={<Login />}/> */}
      </Routes>

    </div>
<Footer/>
   </>
  );
}

export default App;
