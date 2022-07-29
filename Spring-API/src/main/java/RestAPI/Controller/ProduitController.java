package RestAPI.Controller;

import RestAPI.DAO.ProduitRepository;
import RestAPI.DO.ProduitDO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import javax.persistence.OrderBy;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ProduitController {
    @Autowired
    ProduitRepository produitRepository;
    @GetMapping("/produits")
    public List<ProduitDO> getAll(
            @RequestParam(required = false,name ="search") String search,
            @RequestParam(required = false,name="sort") String sort)
    {
        if(search==null && sort==null) {
            System.err.println("Voici la liste des produits");
            return produitRepository.findAll();
        }
        System.out.print(sort);
        System.out.print(search);
        if(sort == null){
            System.err.println("Voici la liste des produits");
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

    @PutMapping("/admin/produits")
    public void updateProduit(@RequestBody ProduitDO produit){
        System.err.println("hello");
        produitRepository.save(produit);
        System.err.println("Le produit à bien été modifier");
    }

    @DeleteMapping("/admin/produits/{id}")
    public void deleteProduit(@PathVariable long id){
        produitRepository.deleteById(id);
        System.err.println("Le produit à bien été supprimer");
    }


}
