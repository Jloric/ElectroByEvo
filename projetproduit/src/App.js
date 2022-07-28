import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Test from './Test';
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/"  exact element={<Navigate to="/books" replace/>}/>
        <Route path="/books" exact element={<Test />} />
        <Route path="/books/add" element = {<Test />}/>
        <Route path="/books/edit/:id" element = {<Test />}/>
      </Routes>

    </div>
   
  );
}

export default App;
