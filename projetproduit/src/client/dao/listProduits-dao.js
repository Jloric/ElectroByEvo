import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const apiURL ="http://localhost:8082/api/produits";

const Listproduits = ()=>{
    //initialiser l'état de notre composant avec un hook produits.
    const [produits, setProduits] = useState([]);

    //Fonction permettant de charger la liste des produits à partir du serveur
    const loadData =()=>{
        return fetch(apiURL)
            .then(response => response.json())
            .then(produits => {
                    console.log(produits);
                    return produits
                }
            )
    }
    useEffect(
        ()=>{loadData().then(produits => setProduits(produits)) }
     , [])

     return (
        <>
            <h1>Liste des produits</h1>
            <div className="row">
            {produits.map((produit) =>{return (
                                                <div className="card col-3 d-flex " style={{"padding": "20px","margin": "20px"}} key={produit.id}>
                                                    <img style={{"objectFit": "contain"}} src={produit.image} alt="description"  />                                                    
                                                    <div className="align-items-end flex-column mt-auto p-2" >
                                                        {/*emplacement des information*/} 
                                                           <h4 style={{"fontFamily": "cursive","color":"#0057A5" }}>{produit.nom}</h4>
                                                            <ul>                                                               
                                                                <li>{produit.prix}€</li>
                                                                <li>Classe énergétique :{produit.note}</li>                                                                
                                                            </ul>  
                                                               <a className="btn btn-primary col-6" href={"/product/"+produit.id}>Détails</a>
                                                     <a href="#"><i className="fas fa-shopping-cart d-flex flex-row-reverse"></i></a>                                                                                                         
                                                    </div>
                                                                                             
                                                </div>
                                            )
                                        }
                                    )}
                                                   
                
            </div>




        </>
    )
}


export default Listproduits;