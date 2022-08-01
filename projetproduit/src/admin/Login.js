import React from 'react';
import {Navigate} from 'react-router-dom';
const Login =  () => {

    function connecter()
    {
        sessionStorage.setItem("token","15645eaze45");
        window.location.reload();

    }
    return (
        <div className="offset-md-4 col-md-4 text-center mt-5">
        { sessionStorage.getItem("token")=== null ?("") : <Navigate to="/admin/produits" replace={true} />}
            <form>
                <div className="form-group">
                    <label htmlFor="login" className="form-label">Login</label>
                    <input id="login" name="login" className="form-control" placeholder="Saisir votre login"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Mot de passe</label>
                    <input id="password" name="password" className="form-control" placeholder="Saisir votre mot de passe"/>
                </div>
                <button className="btn btn-primary" onClick={() => connecter()} type="button">Login</button>
            </form>
        </div>
    )
}

export default Login;