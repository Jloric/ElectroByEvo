import React from 'react';
import {useState, useEffect} from 'react';
import {useNavigate , useParams} from 'react-router-dom';

const FormEdit = () =>{
    const {id} = useParams();
    console.log(id);
    let host = "http://localhost:8080/api";
    const navigate = useNavigate();



    const [produit, setProduit] = useState({
        id : null,
        nom : "",
        prix : "",
        description : "",
        reference : "",
        image : "",
        note : ""
    })



    useEffect(
               ()=>{fetch(host + "/produits/"+id)
                                    .then(response => response.json())
                                    .then(produit => {
                                            console.log(produit);
                                            setProduit(produit);
                                        }
                                    ) }
            ,[]);



    const editProduit = () =>{
                if (produit.reference !== "" && produit.nom !== "" && produit.prix!== "" && produit.description !== ""
                && produit.image !== "" && produit.note !== "") //On peut ajouter les conditions pour la classe énergétique
                {
                    let option = {
                                    method : 'PUT',
                                    headers : {
                                        "content-type" : "application/json"
                                    },
                                    body : JSON.stringify(produit)
                                }
                                fetch(host + "/admin/produits" , option)

                                .then(data => {
                                    console.log(data);
                                    navigate("/admin/produits")
                                } )
                }else
                {
                    console.log("Champ invalide");
                }

            }

        function ChangeHandle  ({target}) {
                setProduit( {...produit, [target.name] :target.value});
            }

    return (
        <>
            <h1>Formulaire d'edition</h1>
                <form>
                            <div className="row mb-5">
                                <div className="col-md-3">
                                    <label htmlFor="nom" className="form-label">Nom</label>
                                    <input type="text" className="form-control mb-5" id="nom" name="nom" value={produit.nom} onChange={(event) => ChangeHandle(event)} required/>

                                    <label htmlFor="prix" className="form-label">Prix</label>
                                    <input type="text" className="form-control" id="prix" name="prix" value={produit.prix} onChange={(event) => ChangeHandle(event)} required/>
                                </div>
                                <div className="offset-2 col-md-7   ">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea className="form-control" name="description" id="description" rows="6" value={produit.description} onChange={(event) => ChangeHandle(event)} required placeholder="Saisir la description de votre produit"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <label htmlFor="reference" className="form-label">Référence</label>
                                    <input type="text" className="form-control mb-3" id="reference" name="reference" value={produit.reference} onChange={(event) => ChangeHandle(event)}/>
                                </div>

                                <div className="offset-md-2 col-md-7">
                                    <label htmlFor="image" className="form-label">Image</label>
                                    <input type="text" className="form-control mb-3" id="image" name="image" value={produit.image} onChange={(event) => ChangeHandle(event)}/>
                                </div>

                            </div>
                            <div className="row mt-5">
                                <div className="col-md-3">

                                    <select class="form-select" name="note" onChange={(event) => ChangeHandle(event)} value={produit.note}>
                                      <option value="" selected>Classe énergétique</option>
                                      <option value="A">A</option>
                                      <option value="B">B</option>
                                      <option value="C">C</option>
                                      <option value="D">D</option>
                                      <option value="E">E</option>
                                      <option value="F">F</option>
                                      <option value="G">G</option>
                                    </select>
                                </div>
                                <input type="hidden" name="id" value={produit.id} onChange={(event) => ChangeHandle(event)}/>
                                <div className="offset-md-7 col-md-2">
                                    <button className="btn btn-success" onClick={() => editProduit()} type="button">Editer</button>
                                </div>
                            </div>
                </form>
        </>
    )
}

export default FormEdit;