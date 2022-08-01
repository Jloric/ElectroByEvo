import React, {useState} from 'react';
import {Navigate} from 'react-router-dom';
const Login =  () => {
    const [user , setUser] = useState({})
    function connecter()
    {
        let option ={
                           method : 'POST',
                                                    headers : {
                                                        "content-type" : "application/json"
                                                    },
                                                    body : JSON.stringify(user)
                                                }
        fetch("http://localhost:8080/api/auth/login", option )
        .then(token =>{ sessionStorage.setItem("token", token); console.log(token.headers.get("token"))})

       // window.location.reload();

    }

    const changeHandler = ({target})=>
    {
        setUser({...user , [target.name] : target.value})
    }
    return (
        <div className="offset-md-4 col-md-4 text-center mt-5">
        { sessionStorage.getItem("token")=== null ?("") : <Navigate to="/admin/produits" replace={true} />}
            <form>
                <div className="form-group">
                    <label htmlFor="login" className="form-label">Login</label>
                    <input id="login" name="username" className="form-control" onChange={(e) => changeHandler(e)}placeholder="Saisir votre login"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Mot de passe</label>
                    <input id="password" name="password" className="form-control" onChange={(e) => changeHandler(e)}placeholder="Saisir votre mot de passe"/>
                </div>
                <button className="btn btn-primary" onClick={() => connecter()} type="button">Login</button>
            </form>
        </div>
    )
}

export default Login;