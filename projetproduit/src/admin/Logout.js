import react,{useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';

const Logout = () => {
const navigate = useNavigate();
useEffect(
()=>{
    fetch("http://localhost:8080/admin/logout" )
    .then(response => navigate("/admin/produits"))
    .catch(e => navigate("/admin/produits"))
}

)
}

export default Logout;