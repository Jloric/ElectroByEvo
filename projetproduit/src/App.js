import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Footer from './Footer';
import NavbarAdmin from './admin/NavbarAdmin';
import FormAdd from './admin/FormAdd'
import FormEdit from './admin/FormEdit';
import ListProduits from './admin/ListProduits';
import Login from './admin/Login';

function App() {

  return (
  <>
  <NavbarAdmin/>
    <div className="container ">
      <Routes>
        <Route path="/"  exact element={<Navigate to="/admin/produits" replace/>}/>
        <Route path="/admin/produits" exact element={<ListProduits />} />
        <Route path="/admin/produits/add" element = {<FormAdd />}/>
        <Route path="/admin/produits/edit/:id" element = {<FormEdit />}/>
        <Route path="/login" exact element={<Login />}/>
      </Routes>

    </div>

  </>
  );
}

export default App;
