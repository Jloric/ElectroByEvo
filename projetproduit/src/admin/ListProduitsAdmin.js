import React, {useState , useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom';
const ListProduitsAdmin = () =>{

    const [state, setState] = useState({
    produits : [],
    search : "",
    trie : ""
    });

    const url = "http://localhost:8080/api";
    const navigate = useNavigate();

    //Fonction permettant de charger la liste des produits à partir du serveur
    const loadData =()=>{
        return fetch(url + "/produits?search=" + state.search +"&sort=" + state.trie)
            .then(response => response.json())
            .then(produits => {
                    console.log(produits);
                    return produits
                }
            );
    }

    //useEffect permet de charger les données
    useEffect(
       ()=>{loadData().then(data => setState({...state,produits : data})) }
    , [state.search, state.trie])

    const deleteProduit= (id) => {
        let option ={
            method : 'DELETE',
            headers : 
            {
                "Authorization":"Bearer "+sessionStorage.getItem("token"),
                "content-type" : "application/json"
            }
                                    }
            fetch(url+"/produits/" + id , option)

                    .then(data => setState({...state , produits : state.produits.filter(b => b.id !== id)}));
        }



    function ChangeSearch({target})
    {
        setState({...state, search : target.value});
        console.log("recherche : " + state.search);
    }

    function ChangeTrie({target})
    {
        setState({...state, trie : target.name});
        console.log(state.trie);
    }
    return (
        <div className="">
            <h1>Liste des produits</h1>
            <div className="float-end col-4 mb-5">
                <input type="text" name="search" placeholder="Rechercher..." className="form-control" onChange={(event) => ChangeSearch(event)} value={state.search}/>
            </div>
            <table className="table table-striped text-center my-5">
                <thead >
                    <tr>
                        <th scope="col" className="triable"><a type="button" name="nom" onClick={(event) => ChangeTrie(event)}>Nom</a><img style={{"height" : "10px", "width" : "auto"}} src={require('../images/flechetrie.png')}/></th>
                        <th scope="col" className="triable"><a type="button" name="note" onClick={(event) => ChangeTrie(event)}>DPE</a><img style={{"height" : "10px", "width" : "auto"}} src={require('../images/flechetrie.png')}/></th>
                        <th scope="col" className="triable"><a type="button" name="prix" onClick={(event) => ChangeTrie(event)}>Prix</a><img style={{"height" : "10px", "width" : "auto"}} src={require('../images/flechetrie.png')}/></th>
                        <th scope="col">Référence</th>
                        <th scope="col">Descripition</th>
                        <th scope="col">Modifier</th>
                        <th scope="col">Supprimer</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        state.produits.map(
                        (produit) =>
                            {
                                return (
                                    <tr key={produit.id}>
                                        <td>{produit.nom}</td>
                                        <td>{produit.note}</td>
                                        <td>{produit.prix}</td>
                                        <td>{produit.reference}</td>
                                        <td>{produit.description}</td>
                                        <td><Link className="btn btn-info" to={"/admin/produits/edit/" + produit.id}>Modifier</Link></td>
                                        <td><button className="btn btn-danger" onClick={()=>deleteProduit(produit.id)}>Supprimer</button></td>
                                    </tr>
                                )
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListProduitsAdmin;