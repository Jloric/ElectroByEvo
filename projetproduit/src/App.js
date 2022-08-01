import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Listproduits from './client/dao/listProduits-dao';
import GetProduitById from './client/dao/produit-dao';
import NavbarClient from './client/nav/navBar';
import ListProduitsAdmin from './admin/ListProduitsAdmin';
import FormAdd from './admin/FormAdd';
import FormEdit from './admin/FormEdit';
import Login from './admin/Login';
import Logout from './admin/Logout';
import NavbarAdmin from './admin/NavbarAdmin';
import Footer from './Footer';

function App(){
  return (
    <>
    {
        sessionStorage.getItem("token")!==null ? (<NavbarAdmin/>) : (<NavbarClient/>)
    }


    <div div className="container border p-3 my-5 "style={{"background-color":" rgba(112, 210, 255,0.2)"}}>

      <Routes>
        <Route path="/home"  exact element={<Listproduits/>}/>
        <Route path="/produit/:idProduit" exact element={<GetProduitById />} />
        <Route path="/admin/produits" exact element={<ListProduitsAdmin/>}/>
        <Route path="/admin/produits/add" element={<FormAdd/>}/>
        <Route path="/admin/produits/edit/:id" element={<FormEdit/>}/>
        <Route path="/login" exact element={<Login />}/>
      </Routes>

    </div>
    <Footer/>
   </>
  );
}

export default App;
