import react,{useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';

const Logout = () => {
const navigate = useNavigate();
function deconnection(){
    /*fetch("http://localhost:8080/admin/logout" )
        .then(response => navigate("/home"))
        .catch(e => navigate("/home"))*/
    sessionStorage.removeItem("token");

    window.location.reload();
}




return (
    <button className="nav-link btn btn-danger p-2"  onClick={() => deconnection()}>Se déconnecter</button>
)
}

export default Logout;