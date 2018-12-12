package testBackendReader;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by 11502064 on 15/11/2018.
 */

@Table( name = "huisartsen")
@Entity
public class Huisdokter {

    @Id @Column(name = "ID")
    private float id;

    @Column(name = "Naam")
    private String naam;

    @Column(name = "Straat")
    private String straat;

    @Column(name = "Telefoonnr")
    private String telefoon;

    public String getNaam() {
        return naam;
    }

    public void setNaam(String naam) {
        this.naam = naam;
    }

    public String getStraat() {
        return straat;
    }

    public void setStraat(String straat) {
        this.straat = straat;
    }

    public String getTelefoon() {
        return telefoon;
    }

    public void setTelefoon(String telefoon) {
        this.telefoon = telefoon;
    }
}
