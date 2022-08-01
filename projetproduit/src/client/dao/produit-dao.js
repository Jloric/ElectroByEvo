import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
//import {Link} from "react-router-dom";
const apiURL ="http://localhost:8082/api/produits/";




const GetProduitById =()=>{
  const {idProduit}= useParams();

  const [produit, setProduit] = useState(
    {
        nom : "",
        note: "",
        prix : "",
        description : "",
        reference: "",
        image: ""
    }
);

  //Fonction permettant de charger la liste des produits à partir du serveur
    const FetchOneProduit =(idProduit)=>{    
        return fetch(apiURL+idProduit)
        .then(response => response.json())
        .then(produit => {
            console.log("retour du fetch: "+JSON.stringify(produit) );
            return produit
        })
    }

      //useEffect permet de charger les données 
    useEffect(
        ()=>{let produit=FetchOneProduit(idProduit).then(produit => setProduit(produit))
        console.log("retour useEffect: "+JSON.stringify(produit)) } 
     , [])
 
    const changeHandler = ({target})=>{
        setProduit({...produit, [target.name] : target.value});
    }

    return (
    <> 
    
        <div >
            <div className="mb-3">
            <h1 className="mt-3 mb-3 pt-3 pb-3">{produit.nom}</h1>
            <div className="container">
                <div className="box">
                    <div className="row">
                        <div className="col-6">
                        {/*emplacement des information*/} 
                            <ul  >
                                <li className="mt-3 mb-3 pt-3 pb-3">Classe energetique : {produit.note}</li>
                                <li className="mt-3 mb-3 pt-3 pb-3">{produit.reference}</li>
                                <li className="mt-3 mb-3 pt-3 pb-3">{produit.prix}€</li>
                                <li className="mt-3 mb-1 pt-3 pb-1">{produit.description}</li>
                            </ul>
                           
                             <a href="#"><i style={{"height": "50px","width":"auto"}} className="fas fa-shopping-cart fa-5x  m-5"></i></a>
                             <a  className="btn btn-primary  m-5" aria-current="page" href="/home">Retour à la liste des produits</a>
                        </div>
                        <div className="col-6">
                        {/*emplacement de l'image*/}
                        <p><img src={produit.image} alt={"image produit:\n"+produit.nom} width="500" height="auto" /></p> 
                         
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className="row">
            {/* <div className="col-6"></div> */}
            {/* <div className="col-6"><button type="button" className="btn btn-primary" onClick={(event)=>{console.log("click!")  }} >Ajouter au panier</button></div> */}
            
            </div>
        </div>
        </div>
        
    </>
    
    )
}
export default GetProduitById;