import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Listproduits from './client/dao/listProduits-dao';
import GetProduitById from './client/dao/produit-dao';
import NavbarClient from './client/nav/navBar';

function App() {
  return (
    <>

    <NavbarClient/>

    <div className="container">

      <Routes>
        <Route path="/home"  exact element={<Listproduits/>}/>
        <Route path="/product/:idProduit" exact element={<GetProduitById />} />
        {/* <Route path="/login" exact element={<Login />}/> */}
      </Routes>

    </div>

   </>
  );
}

export default App;
