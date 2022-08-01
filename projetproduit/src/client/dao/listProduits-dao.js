import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const apiURL ="http://localhost:8080/api/produits";

const Listproduits = ()=>{
    //initialiser l'état de notre composant avec un hook produits.
    //const [produits, setProduits] = useState([]);
    const [state, setState] = useState({
        produits : [],
        search : "",
        trie : ""
        });
    //Fonction permettant de charger la liste des produits à partir du serveur
    const loadData =()=>{
        return fetch(apiURL + "?search=" + state.search + "&sort="+state.trie)
            .then(response => response.json())
            .then(produits => {
                    console.log(produits);
                    return produits
                }
            )
    }
    useEffect(
        ()=>{loadData().then(produits => setState({...state , produits : produits})) }
     , [state.search, state.trie])

    function ChangeSearch(event){
        setState({...state, search : event.target.value});
        console.log(state.search);
    }


     return (
        <>
            <h1>Liste des produits</h1>
            <div className="col-4 mb-5">
                <input type="text" name="search" placeholder="Rechercher..." className="form-control" onChange={(event) => ChangeSearch(event)} value={state.search}/>
            </div>
            <div >
                <span className="fw-bold">Triage</span>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label class="form-check-label" for="flexRadioDefault1">
                    Classe Energétique
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Prix
                  </label>
                </div>

            </div>

            <div className="row">
            {state.produits.map((produit) =>{return (
                                                <div className="card col-3 d-flex " style={{"padding": "20px","margin": "20px"}} key={produit.id}>
                                                    <img style={{"objectFit": "contain"}} src={produit.image} alt="description"  />                                                    
                                                    <div className="align-items-end flex-column mt-auto p-2" >
                                                        {/*emplacement des information*/} 
                                                           <h4 style={{"fontFamily": "cursive","color":"#0057A5" }}>{produit.nom}</h4>
                                                            <ul>                                                               
                                                                <li>{produit.prix}€</li>
                                                                <li>Classe énergétique :{produit.note}</li>                                                                
                                                            </ul>  
                                                               <a className="btn btn-primary col-6" href={"/produit/"+produit.id}>Détails</a>
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