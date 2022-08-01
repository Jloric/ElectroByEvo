package RestAPI.Controller;

import RestAPI.DAO.ProduitRepository;
import RestAPI.Entities.Produit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProduitController {
    @Autowired
    ProduitRepository produitRepository;
    @GetMapping("/produits")
    public List<Produit> getAll(){
        System.err.println("Voici la liste des produits");
      return  produitRepository.findAll();
    }
    @GetMapping("/produits/{id}")
    public Produit getById(@PathVariable long id){
        Produit produit=produitRepository.findById(id).get();
        System.err.println("Voici votre produit n°: "+id);
        return produit;
    }

    @PostMapping("/produits")
    public Produit addProduit(@RequestBody Produit produit){
        produitRepository.save(produit);
        System.err.println("Le produit à bien été ajouter");
        return produit;
    }

    @PutMapping("/produits")
    public void updateProduit(@RequestBody Produit produit){
        produitRepository.save(produit);
        System.err.println("Le produit à bien été modifier");
    }

    @DeleteMapping("/produits/{id}")
    public void deleteProduit(@PathVariable long id){
        produitRepository.deleteById(id);
        System.err.println("Le produit à bien été supprimer");
    }
}
