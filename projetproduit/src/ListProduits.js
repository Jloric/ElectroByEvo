import React, {useState , useEffect } from 'react'

const ListProduits = () =>{
    const [produits, setProduits] = useState([]);
    const url = "http://localhost:8080";


    //Fonction permettant de charger la liste des produits à partir du serveur
    const loadData =()=>{
        return fetch(url + "/produits" )
            .then(response => response.json())
            .then(produits => {
                    console.log(produits);
                    return produits
                }
            );
    }

    //useEffect permet de charger les données
    useEffect(
       ()=>{loadData().then(produits => setProduits(produits)) }
    , [])


    return (
        <>
            <h1>Liste des produits</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">DPE</th>
                        <th scope="col">Prix</th>
                        <th scope="col">Référence</th>
                        <th scope="col">Modifier</th>
                        <th scope="col">Supprimer</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        produits.map(
                        (produit) =>
                            {
                                return (
                                    <tr key={produit.id}>
                                        <td>{produit.nom}</td>
                                        <td>{produit.note}</td>
                                        <td>{produit.prix}</td>
                                        <td>{produit.reference}</td>
                                        <td><button className="btn btn-info">Modifier</button></td>
                                        <td><button className="btn btn-danger">Supprimer</button></td>
                                    </tr>
                                )
                            }
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default ListProduits;