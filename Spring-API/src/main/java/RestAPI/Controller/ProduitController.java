package RestAPI.Controller;

import RestAPI.DAO.ProduitRepository;
import RestAPI.DO.ProduitDO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProduitController {
    @Autowired
    ProduitRepository produitRepository;
    @GetMapping("/produits")
    public List<ProduitDO> getAll(){
        System.err.println("Voici la liste des produits");
      return  produitRepository.findAll();
    }
    @GetMapping("/produits/{id}")
    public ProduitDO getById(@PathVariable long id){
        ProduitDO produit=produitRepository.findById(id).get();
        System.err.println("Voici votre produit n°: "+id);
        return produit;
    }

    @PostMapping("/admin/produits")
    public ProduitDO addProduit(@RequestBody ProduitDO produit){
        produitRepository.save(produit);
        System.err.println("Le produit à bien été ajouter");
        return produit;
    }

    @PutMapping("/admin/produits/")
    public void updateProduit(@RequestBody ProduitDO produit){
        produitRepository.save(produit);
        System.err.println("Le produit à bien été modifier");
    }

    @DeleteMapping("/admin/produit/{id}")
    public void deleteProduit(@PathVariable long id){
        produitRepository.deleteById(id);
        System.err.println("Le produit à bien été supprimer");
    }
}
