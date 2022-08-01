package RestAPI.Controller;

import RestAPI.DAO.ProduitRepository;
import RestAPI.Entities.Produit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProduitController {
    @Autowired
    ProduitRepository produitRepository;
    @GetMapping("/produits")
    public List<Produit> getAll(
            @RequestParam(required = false,name ="search") String search,
            @RequestParam(required = false,name="sort") String sort)
    {
        if(search==null && sort==null) {
            System.err.println("Voici la liste des produits");
            return produitRepository.findAll();
        }else{
        }
        System.out.print(sort);
        System.out.print(search);
        if(sort == null){
            System.err.println("Voici la liste des produits");
            System.err.println("keyword:"+search);
            System.err.println("keyword:" + search);
            return produitRepository.searchProduit(search);
        }
        if(search == null){
            System.err.println("Voici la liste des produits trié");
            System.err.println("Sort:" + sort);
            return produitRepository.findAll(Sort.by(Sort.Direction.ASC,sort));
        }
        else{
            System.err.println("keyword:" + search+"Sort:"+sort);
            if(sort.equals("note")) {
                System.err.println("Voici la liste des produits triés par notes et qui correspondent a la recherche");

                return produitRepository.searchProduitSortedByNote(search);
            }else{
                System.err.println("Voici la liste des produits triés par prix et qui correspondent a la recherche");
                return produitRepository.searchProduitSortedByPrix(search);
            }
        }
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
