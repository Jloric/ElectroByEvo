import React from 'react';

const Login =  () => {
    return (
        <div className="offset-md-4 col-md-4 text-center mt-5">
            <form>
                <div className="form-group">
                    <label htmlFor="login" className="form-label">Login</label>
                    <input id="login" name="login" className="form-control" placeholder="Saisir votre login"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Mot de passe</label>
                    <input id="password" name="password" className="form-control" placeholder="Saisir votre mot de passe"/>
                </div>
                <button className="btn btn-primary" type="button">Login</button>
            </form>
        </div>
    )
}

export default Login;