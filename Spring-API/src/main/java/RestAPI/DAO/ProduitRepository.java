package RestAPI.DAO;

import RestAPI.Entities.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProduitRepository extends JpaRepository<Produit,Long> {
    @Query("SELECT p FROM Produit p WHERE " +
            "p.nom LIKE CONCAT('%',:search, '%')" +
            "Or p.note LIKE CONCAT('%', :search, '%')"+
            "Or p.prix LIKE CONCAT('%', :search, '%')")
    List<Produit> searchProduit(String search);
    @Query("SELECT p FROM Produit p WHERE " +
            "p.nom LIKE CONCAT('%',:search, '%')" +
            "Or p.prix LIKE CONCAT('%', :search, '%')"+
            "ORDER BY p.note ")

    List<Produit> searchProduitSortedByNote(String search);
    @Query("SELECT p FROM Produit p WHERE " +
            "p.nom LIKE CONCAT('%',:search, '%')" +
            "Or p.prix LIKE CONCAT('%', :search, '%')"+
            "ORDER BY p.prix ")

    List<Produit> searchProduitSortedByPrix(String search);

}
