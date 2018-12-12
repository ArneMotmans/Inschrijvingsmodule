package testBackendReader;

import javax.persistence.*;

/**
 * Created by 11502064 on 25/10/2018.
 */

@Table( name = "gemeenten" )
@Entity
public class Gemeente {

    @Column(name = "Deelgemeente"  )
    private String deelGemeente;

    @Column(name = "Fusiegemeente")
    private String fusieGemeente;

    @Column(name = "Postcode")
    private String postcode;

    @Column(name = "Postnummer")
    private String postnummer;

    @Column(name = "NISCode")
    private String NISCode;

    @Id @GeneratedValue @Column(name = "ID")
    private float ID;

    @Column(name = "Land")
    private float land;

    @Column(name = "Recordtype")
    private String recordType;

    public float getID() {
        return ID;
    }

    public void setID(float ID) {
        this.ID = ID;
    }

    public String getDeelGemeente() {
        return deelGemeente;
    }

    public void setDeelGemeente(String deelGemeente) {
        this.deelGemeente = deelGemeente;
    }

    public String getFusieGemeente() {
        return fusieGemeente;
    }

    public void setFusieGemeente(String fusieGemeente) {
        this.fusieGemeente = fusieGemeente;
    }

    public String getPostcode() {
        return postcode;
    }

    public void setPostcode(String postcode) {
        this.postcode = postcode;
    }

    public String getPostnummer() {
        return postnummer;
    }

    public void setPostnummer(String postnummer) {
        this.postnummer = postnummer;
    }

    public String getNISCode() {
        return NISCode;
    }

    public void setNISCode(String NISCode) {
        this.NISCode = NISCode;
    }

    public float getLand() {
        return land;
    }

    public void setLand(float land) {
        this.land = land;
    }

    public String getRecordType() {
        return recordType;
    }

    public void setRecordType(String recordType) {
        this.recordType = recordType;
    }


}
