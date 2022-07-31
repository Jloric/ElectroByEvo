import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';


const FormAdd = () =>{

    let host = "http://localhost:8080/api/admin/produits";

    const navigate = useNavigate();

    const [produit, setProduit] = useState({
        nom : "",
        prix : "",
        description : "",
        reference : "",
        image : "",
        note : ""
    })

    const ajoutProduit = () =>{
            if (produit.reference !== "" && produit.nom !== "" && produit.prix!== "" && produit.description !== ""
            && produit.image !== "" && produit.note !== "") //On peut ajouter les conditions pour la classe énergétique
            {
                let option = {
                                method : 'POST',
                                headers : {
                                    "content-type" : "application/json"
                                },
                                body : JSON.stringify(produit)
                            }
                            fetch(host, option)
                            .then(response => response.json())
                            .then(data => {
                                console.log(data);
                                navigate("/admin/produits")
                            } )
            }else
            {

            }

        }

    function ChangeHandle  ({target}) {
            setProduit( {...produit, [target.name] :target.value});
        }

    return (
        <>
            <h1>Formulaire Ajout</h1>
            <form>
                <div className="row mb-5">
                    <div className="col-md-3">
                        <label htmlFor="nom" className="form-label">Nom</label>
                        <input type="text" className="form-control mb-5" id="nom" name="nom" value={produit.nom} onChange={(event) => ChangeHandle(event)}/>

                        <label htmlFor="prix" className="form-label">Prix</label>
                        <input type="text" className="form-control" id="prix" name="prix" value={produit.prix} onChange={(event) => ChangeHandle(event)}/>
                    </div>
                    <div className="offset-md-2 col-md-7   ">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="form-control" name="description" id="description" rows="6" value={produit.description} onChange={(event) => ChangeHandle(event)} placeholder="Saisir la description de votre produit"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <label htmlFor="reference" className="form-label">Référence</label>
                        <input type="text" className="form-control mb-3" id="reference" name="reference" value={produit.referecence} onChange={(event) => ChangeHandle(event)}/>
                    </div>

                    <div className="offset-md-2 col-md-7">
                        <label htmlFor="image" className="form-label">Image</label>
                        <input type="text" className="form-control mb-3" id="image" name="image" value={produit.image} onChange={(event) => ChangeHandle(event)}/>
                        
                    </div>

                </div>
                <div className="row mt-5">
                    <div className="col-md-3 mb-5">

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
                   
                        <div className=" offset-md-2 col-md-3">
                            
                            <img src={produit.image} class="float-start img-thumbnail" alt="preview de l'image du produit" style={{"width" : "200px", "height" : "auto"}}/>
                        </div>
                    
                    <div className="col-2 offset-md-2">
                    <button className="btn btn-success" onClick={() => ajoutProduit()} type="button">Ajouter</button>
                    
                    </div>
                </div>
            </form>
        </>
    )
}

export default FormAdd;