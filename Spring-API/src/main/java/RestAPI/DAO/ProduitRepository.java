package RestAPI.DAO;

import RestAPI.DO.ProduitDO;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProduitRepository extends JpaRepository<ProduitDO,Long> {

}
