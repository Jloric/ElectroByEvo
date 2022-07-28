import React from 'react'

const FormAdd = () =>{
    return (
        <>
            <h1>Formulaire Ajout</h1>
            <form>
                <div className="row mb-5">
                    <div className="col-md-3">
                        <label htmlFor="nom" className="form-label">Nom</label>
                        <input type="text" className="form-control mb-5" id="nom" name="nom"/>

                        <label htmlFor="prix" className="form-label">Prix</label>
                        <input type="number" className="form-control" id="prix" name="prix"/>
                    </div>
                    <div className="offset-2 col-md-7   ">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="form-control" name="description" id="description" rows="6" placeholder="Saisir la description de votre produit"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <label htmlFor="reference" className="form-label">Référence</label>
                        <input type="text" className="form-control mb-3" id="reference" name="reference"/>
                    </div>

                    <div className="offset-md-2 col-md-7">
                        <label htmlFor="image" className="form-label">Image</label>
                        <input type="text" className="form-control mb-3" id="image" name="image"/>
                    </div>

                </div>
            </form>
        </>
    )
}

export default FormAdd;