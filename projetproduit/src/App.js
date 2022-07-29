import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import NavbarAdmin from './NavbarAdmin';
import FormAdd from './FormAdd';
import FormEdit from './FormEdit';
import ListProduits from './ListProduits';
import Login from './Login';
function App() {

  return (
  <>
  <NavbarAdmin/>
    <div className="container">
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
