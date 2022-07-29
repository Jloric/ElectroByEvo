package RestAPI;

import RestAPI.DAO.ProduitRepository;
import RestAPI.DO.ProduitDO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import static RestAPI.DO.ClasseEnergetique.A;
import static RestAPI.DO.ClasseEnergetique.C;

@SpringBootApplication
public class Application implements CommandLineRunner {
    @Autowired
    ProduitRepository produitRepository;
    public static void main(String[] args){
        SpringApplication.run(Application.class,args);
    }

    @Override
    public void run(String... args) throws Exception {
//        produitRepository.save(new ProduitDO( "r5dsgdfg646w",
//                "Refrigérateur","un réfrigérateur d'enfer avec un distributeur de glaçons ronds",999.0,
//                A,"https://cdn.lesnumeriques.com/optim/product/62/62095/4064ddd7-rf23r62e3s9__450_400.jpeg"));
//        produitRepository.save(new ProduitDO( "r5clkjg555",
//                "gazinière","une gazinière performante avec un super four", 499.0,
//                C,"https://media1.svb-marine.fr/en/images/513018/eno-bretagne-gas-hob-oven-and-grill-3-burners.jpg"));
//        produitRepository.save(new ProduitDO( "r5djh964dfhs6w",
//                "Sèche-linge","un Sèche-linge  avec un déclenchement retardé",399.0,
//                A,"\"https://cdn.lesnumeriques.com/optim/product/62/62095/4064ddd7-rf23r62e3s9__450_400.jpeg"));
//        produitRepository.save(new ProduitDO( "kjsgjcs591dd66s5",
//                "Lave-linge","un lave-linge avec départ différé et plein de super option",699.0,
//                C,"https://www.lg.com/fr/images/lave-linge/md07517852/gallery/medium01-1_new.jpg"));
    }
}
