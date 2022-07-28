package RestAPI.DO;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity(name = "Produit")
public class ProduitDO {
    @Id @GeneratedValue
    private Long Id;

    private String reference;
    private String nom;
    private String description;
    private double prix;

    public ProduitDO() {
    }

    public ProduitDO(Long id, String nom, String description, double prix) {
        Id = id;
        this.nom = nom;
        this.description = description;
        this.prix = prix;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrix() {
        return prix;
    }

    public void setPrix(double prix) {
        this.prix = prix;
    }
}
