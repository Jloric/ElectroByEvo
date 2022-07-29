package RestAPI.DAO;

import RestAPI.DO.ProduitDO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProduitRepository extends JpaRepository<ProduitDO,Long> {
    @Query("SELECT p FROM Produit p WHERE " +
            "p.nom LIKE CONCAT('%',:search, '%')" +
            "Or p.note LIKE CONCAT('%', :search, '%')"+
            "Or p.prix LIKE CONCAT('%', :search, '%')")
    List<ProduitDO> searchProduit(String search);
}
