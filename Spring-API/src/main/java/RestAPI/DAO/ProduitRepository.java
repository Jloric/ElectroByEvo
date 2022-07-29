package RestAPI.DAO;

import RestAPI.DO.ProduitDO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.persistence.OrderBy;
import java.util.List;

public interface ProduitRepository extends JpaRepository<ProduitDO,Long> {
    @Query("SELECT p FROM Produit p WHERE " +
            "p.nom LIKE CONCAT('%',:search, '%')" +
            "Or p.note LIKE CONCAT('%', :search, '%')"+
            "Or p.prix LIKE CONCAT('%', :search, '%')")
    List<ProduitDO> searchProduit(String search);
    @Query("SELECT p FROM Produit p WHERE " +
            "p.nom LIKE CONCAT('%',:search, '%')" +
            "Or p.prix LIKE CONCAT('%', :search, '%')"+
            "ORDER BY p.note ")

    List<ProduitDO> searchProduitSortedByNote(String search);
    @Query("SELECT p FROM Produit p WHERE " +
            "p.nom LIKE CONCAT('%',:search, '%')" +
            "Or p.prix LIKE CONCAT('%', :search, '%')"+
            "ORDER BY p.prix ")

    List<ProduitDO> searchProduitSortedByPrix(String search);

}
