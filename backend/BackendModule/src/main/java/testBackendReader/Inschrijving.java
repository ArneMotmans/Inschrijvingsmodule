package testBackendReader;

import com.google.protobuf.ByteString;
import org.apache.tomcat.jni.Local;
import org.hibernate.validator.constraints.Length;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.Null;
import java.time.LocalDateTime;
import java.util.Date;

/**
 * Created by 11502064 on 22/10/2018.
 */

@Entity
public class Inschrijving {

    //region Variables
    @Id @GeneratedValue
    private int id;

    @Length(max = 999999)
    private String foto;
    private String securityCode;
    private int wisaNr;
    private String gebruikersnaam;
    private int volgnrURS;
    private int volgnrAMA;
    private int status;
    private Date datumInschrijving;
    private Date datumWijziging;
    private String leerjaar;
    private String studieRichting;
    private String keuzevak;
    private String naam;
    private String voornaam;
    private String roepnaam;
    private String geslacht;
    private int geboorteGemeenteID;
    private String geboorteplaats;
    private Date geboorteDatum;
    private String rijksregisternummer;
    private String nationaliteit;
    private int nationaliteitID;
    private int landID;
    private String leerlingStraat;
    private String leerlingNr;
    private String leerlingBus;
    private String leerlingGemeente;
    private int leerlingGemeenteID;
    private String leerlingPostcode;
    private String leerlingTelefoon;
    private String leerlingNoodTelefoon;
    private int leerlingNoodTelefoonBijID;
    private String leerlingGSM;
    private String leerlingEmail;
    private String leerlingDringendeGevallen;
    private String internet;
    private String vaderNaam;
    private String vaderVoornaam;
    private String vaderBeroep;
    private String vaderNationaliteit;
    private int vaderNationaliteitID;
    private String vaderGSM;
    private String vaderEmail;
    private String vaderBurgerlijkestand;
    private String vaderStraat;
    private String vaderNr;
    private String vaderBus;
    private String vaderGemeente;
    private int vaderGemeenteID;
    private String vaderPostcode;
    private String moederNaam;
    private String moederVoornaam;
    private String moederBeroep;
    private String moederNationaliteit;
    private int moederNationaliteitID;
    private String moederGSM;
    private String moederEmail;
    private String moederBurgerlijkestand;
    private String moederStraat;
    private String moederNr;
    private String moederBus;
    private String moederGemeente;
    private String moederGemeenteID;
    private String moederPostcode;
    private String voNaam;
    private String voVoornaam;
    private String voInstelling;
    private String voGSM;
    private String voEmail;
    private String voStraat;
    private String voNr;
    private String voBus;
    private String voGemeente;
    private int voGemeenteID;
    private String voPostcode;
    private String voRelatieTotLeerling;
    private int gBroers;
    private int gZussen;
    private int gHoeveelste;
    private String gBroerZusOpSchool;
    private boolean tsOudersGescheiden;
    private boolean tsGeenContactVader;
    private boolean tsGeenContactMoeder;
    private boolean tsVaderOverleden;
    private boolean tsMoederOverleden;
    private boolean tsBroerOverleden;
    private boolean tsZusOverleden;
    private boolean tsErnstigZiekFamilieLid;
    private boolean tsOnderToezichtOfJeugdinstelling;
    private boolean tsInternaatsLeerling;
    private boolean tsCoOuderschap;
    private boolean tsHoedderechtVader;
    private boolean tsHoedderechtMoeder;
    private boolean tsZonderVasteVerblijfPlaats;
    private String gAndere;
    private String niHuisArts;
    private String niHuisArtsStraat;
    private String niHuisArtsTelefoon;
    private String niCommunicatieOudersRechtstreeks;
    private String niCommunicatieOudersVia;
    private boolean niGemotiveerdVerslag;
    private boolean niVerslag;
    private boolean niMeerwaardeOuders;
    private String niMeerwaardeUitleg;
    private int LBOJaar1;
    private String LBOSchool1;
    private String LBOInstellingsnr1;
    private String LBOGedubbeld1;
    private int LBOJaar2;
    private String LBOSchool2;
    private String LBOInstellingsnr2;
    private String LBOGedubbeld2;
    private int LSOJaar1;
    private String LSOSchool1;
    private String LSOInstellingsnr1;
    private String LSOAttestAdvies1;
    private int LSOJaar2;
    private String LSOSchool2;
    private String LSOInstellingsnr2;
    private String LSOAttestAdvies2;
    private int LSOJaar3;
    private String LSOSchool3;
    private String LSOInstellingsnr3;
    private String LSOAttestAdvies3;
    private boolean IADD;
    private boolean IADHD;
    private boolean IASS;
    private boolean INLD;
    private boolean IReserve;
    private boolean IFobie;
    private boolean IConcentratie;
    private boolean IGillesDeLaTourette;
    private String IAndereInfo;
    private boolean LZDyscalculie;
    private boolean LZDyslexie;
    private boolean LZDysorthografie;
    private boolean LZDyspraxie;
    private boolean LZFaalangst;
    private boolean LZHoogbegaafd;
    private boolean LZTaalproblemen;
    private boolean LZHoogsensitief;
    private String LZAndereInfo;
    private boolean MGAllergie;
    private boolean MGAstma;
    private boolean MGEpilepsie;
    private boolean MGGehoorprobleem;
    private boolean MGZichtsprobleem;
    private boolean MGHooikoorts;
    private boolean MGMigraine;
    private boolean MGReuma;
    private boolean MGHartafwijking;
    private boolean MGDiabetes;
    private boolean MGLactoreIntolerantie;
    private boolean MGMotorischeProblemen;
    private boolean MGZindelijkheid;
    private String MGAndereInfo;
    private boolean MRilatine;
    private boolean MConcerta;
    private boolean MRisperdal;
    private String MAndereInfo;
    private String IKopieRapport;
    private String IKopieOrigineelGetuigschrift;
    private String IAttestLeerPU;
    private String IBaSOfiche;
    private String BISterkePunten;
    private String BICompetitiesport;
    private String BICompetitiesportInfo;
    private String BIAndere;
    private String BIKlasgenoten;
    private String BIAvondstudie;
    private String BIMiddagpas;
    private String BIKeuze;
    private String BIOverlegmoment;
    private String BIIdentiteitskaart;
    private String BIGesprekKlassenLeraar;
    private String BiLeesNiveau;
    private String BICLBAttest;
    //endregion


    //region Getters and Setters

    public String getKeuzevak() {
        return keuzevak;
    }

    public void setKeuzevak(String keuzevak) {
        this.keuzevak = keuzevak;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public String getIKopieRapport() {
        return IKopieRapport;
    }

    public void setIKopieRapport(String IKopieRapport) {
        this.IKopieRapport = IKopieRapport;
    }

    public String getIKopieOrigineelGetuigschrift() {
        return IKopieOrigineelGetuigschrift;
    }

    public void setIKopieOrigineelGetuigschrift(String IKopieOrigineelGetuigschrift) {
        this.IKopieOrigineelGetuigschrift = IKopieOrigineelGetuigschrift;
    }

    public String getIAttestLeerPU() {
        return IAttestLeerPU;
    }

    public void setIAttestLeerPU(String IAttestLeerPU) {
        this.IAttestLeerPU = IAttestLeerPU;
    }

    public String getIBaSOfiche() {
        return IBaSOfiche;
    }

    public void setIBaSOfiche(String IBaSOfiche) {
        this.IBaSOfiche = IBaSOfiche;
    }

    public String getBIAvondstudie() {
        return BIAvondstudie;
    }

    public void setBIAvondstudie(String BIAvondstudie) {
        this.BIAvondstudie = BIAvondstudie;
    }

    public String getBIOverlegmoment() {
        return BIOverlegmoment;
    }

    public void setBIOverlegmoment(String BIOverlegmoment) {
        this.BIOverlegmoment = BIOverlegmoment;
    }

    public String getBIIdentiteitskaart() {
        return BIIdentiteitskaart;
    }

    public void setBIIdentiteitskaart(String BIIdentiteitskaart) {
        this.BIIdentiteitskaart = BIIdentiteitskaart;
    }

    public String getBIGesprekKlassenLeraar() {
        return BIGesprekKlassenLeraar;
    }

    public void setBIGesprekKlassenLeraar(String BIGesprekKlassenLeraar) {
        this.BIGesprekKlassenLeraar = BIGesprekKlassenLeraar;
    }

    public String getBICLBAttest() {
        return BICLBAttest;
    }

    public void setBICLBAttest(String BICLBAttest) {
        this.BICLBAttest = BICLBAttest;
    }

    public String getSecurityCode() {
        return securityCode;
    }

    public void setSecurityCode(String securityCode) {
        this.securityCode = securityCode;
    }

    public String getVaderNaam() {
        return vaderNaam;
    }

    public void setVaderNaam(String vaderNaam) {
        this.vaderNaam = vaderNaam;
    }

    public String getVaderGSM() {
        return vaderGSM;
    }

    public void setVaderGSM(String vaderGSM) {
        this.vaderGSM = vaderGSM;
    }

    public String getVaderEmail() {
        return vaderEmail;
    }

    public void setVaderEmail(String vaderEmail) {
        this.vaderEmail = vaderEmail;
    }

    public String getVaderBurgerlijkestand() {
        return vaderBurgerlijkestand;
    }

    public void setVaderBurgerlijkestand(String vaderBurgerlijkestand) {
        this.vaderBurgerlijkestand = vaderBurgerlijkestand;
    }

    public String getVaderStraat() {
        return vaderStraat;
    }

    public void setVaderStraat(String vaderStraat) {
        this.vaderStraat = vaderStraat;
    }

    public String getVaderNr() {
        return vaderNr;
    }

    public void setVaderNr(String vaderNr) {
        this.vaderNr = vaderNr;
    }

    public String getVaderBus() {
        return vaderBus;
    }

    public void setVaderBus(String vaderBus) {
        this.vaderBus = vaderBus;
    }

    public String getVaderGemeente() {
        return vaderGemeente;
    }

    public void setVaderGemeente(String vaderGemeente) {
        this.vaderGemeente = vaderGemeente;
    }

    public int getVaderGemeenteID() {
        return vaderGemeenteID;
    }

    public void setVaderGemeenteID(int vaderGemeenteID) {
        this.vaderGemeenteID = vaderGemeenteID;
    }

    public String getVaderPostcode() {
        return vaderPostcode;
    }

    public void setVaderPostcode(String vaderPostcode) {
        this.vaderPostcode = vaderPostcode;
    }

    public String getMoederNaam() {
        return moederNaam;
    }

    public void setMoederNaam(String moederNaam) {
        this.moederNaam = moederNaam;
    }

    public String getMoederVoornaam() {
        return moederVoornaam;
    }

    public void setMoederVoornaam(String moederVoornaam) {
        this.moederVoornaam = moederVoornaam;
    }

    public String getMoederBeroep() {
        return moederBeroep;
    }

    public void setMoederBeroep(String moederBeroep) {
        this.moederBeroep = moederBeroep;
    }

    public String getMoederNationaliteit() {
        return moederNationaliteit;
    }

    public void setMoederNationaliteit(String moederNationaliteit) {
        this.moederNationaliteit = moederNationaliteit;
    }

    public int getMoederNationaliteitID() {
        return moederNationaliteitID;
    }

    public void setMoederNationaliteitID(int moederNationaliteitID) {
        this.moederNationaliteitID = moederNationaliteitID;
    }

    public String getMoederGSM() {
        return moederGSM;
    }

    public void setMoederGSM(String moederGSM) {
        this.moederGSM = moederGSM;
    }

    public String getMoederEmail() {
        return moederEmail;
    }

    public void setMoederEmail(String moederEmail) {
        this.moederEmail = moederEmail;
    }

    public String getMoederBurgerlijkestand() {
        return moederBurgerlijkestand;
    }

    public void setMoederBurgerlijkestand(String moederBurgerlijkestand) {
        this.moederBurgerlijkestand = moederBurgerlijkestand;
    }

    public String getMoederStraat() {
        return moederStraat;
    }

    public void setMoederStraat(String moederStraat) {
        this.moederStraat = moederStraat;
    }

    public String getMoederNr() {
        return moederNr;
    }

    public void setMoederNr(String moederNr) {
        this.moederNr = moederNr;
    }

    public String getMoederBus() {
        return moederBus;
    }

    public void setMoederBus(String moederBus) {
        this.moederBus = moederBus;
    }

    public String getMoederGemeente() {
        return moederGemeente;
    }

    public void setMoederGemeente(String moederGemeente) {
        this.moederGemeente = moederGemeente;
    }

    public String getMoederGemeenteID() {
        return moederGemeenteID;
    }

    public void setMoederGemeenteID(String moederGemeenteID) {
        this.moederGemeenteID = moederGemeenteID;
    }

    public String getMoederPostcode() {
        return moederPostcode;
    }

    public void setMoederPostcode(String moederPostcode) {
        this.moederPostcode = moederPostcode;
    }

    public String getVoNaam() {
        return voNaam;
    }

    public void setVoNaam(String voNaam) {
        this.voNaam = voNaam;
    }

    public String getVoVoornaam() {
        return voVoornaam;
    }

    public void setVoVoornaam(String voVoornaam) {
        this.voVoornaam = voVoornaam;
    }

    public String getVoInstelling() {
        return voInstelling;
    }

    public void setVoInstelling(String voInstelling) {
        this.voInstelling = voInstelling;
    }

    public String getVoGSM() {
        return voGSM;
    }

    public void setVoGSM(String voGSM) {
        this.voGSM = voGSM;
    }

    public String getVoEmail() {
        return voEmail;
    }

    public void setVoEmail(String voEmail) {
        this.voEmail = voEmail;
    }

    public String getVoStraat() {
        return voStraat;
    }

    public void setVoStraat(String voStraat) {
        this.voStraat = voStraat;
    }

    public String getVoNr() {
        return voNr;
    }

    public void setVoNr(String voNr) {
        this.voNr = voNr;
    }

    public String getVoBus() {
        return voBus;
    }

    public void setVoBus(String voBus) {
        this.voBus = voBus;
    }

    public String getVoGemeente() {
        return voGemeente;
    }

    public void setVoGemeente(String voGemeente) {
        this.voGemeente = voGemeente;
    }

    public int getVoGemeenteID() {
        return voGemeenteID;
    }

    public void setVoGemeenteID(int voGemeenteID) {
        this.voGemeenteID = voGemeenteID;
    }

    public String getVoPostcode() {
        return voPostcode;
    }

    public void setVoPostcode(String voPostcode) {
        this.voPostcode = voPostcode;
    }

    public String getVoRelatieTotLeerling() {
        return voRelatieTotLeerling;
    }

    public void setVoRelatieTotLeerling(String voRelatieTotLeerling) {
        this.voRelatieTotLeerling = voRelatieTotLeerling;
    }

    public int getgBroers() {
        return gBroers;
    }

    public void setgBroers(int gBroers) {
        this.gBroers = gBroers;
    }

    public int getgZussen() {
        return gZussen;
    }

    public void setgZussen(int gZussen) {
        this.gZussen = gZussen;
    }

    public int getgHoeveelste() {
        return gHoeveelste;
    }

    public void setgHoeveelste(int gHoeveelste) {
        this.gHoeveelste = gHoeveelste;
    }

    public String getgBroerZusOpSchool() {
        return gBroerZusOpSchool;
    }

    public void setgBroerZusOpSchool(String gBroerZusOpSchool) {
        this.gBroerZusOpSchool = gBroerZusOpSchool;
    }

    public boolean getTsOudersGescheiden() {
        return tsOudersGescheiden;
    }

    public void setTsOudersGescheiden(boolean tsOudersGescheiden) {
        this.tsOudersGescheiden = tsOudersGescheiden;
    }

    public boolean getTsGeenContactVader() {
        return tsGeenContactVader;
    }

    public void setTsGeenContactVader(boolean tsGeenContactVader) {
        this.tsGeenContactVader = tsGeenContactVader;
    }

    public boolean getTsGeenContactMoeder() {
        return tsGeenContactMoeder;
    }

    public void setTsGeenContactMoeder(boolean tsGeenContactMoeder) {
        this.tsGeenContactMoeder = tsGeenContactMoeder;
    }

    public boolean getTsVaderOverleden() {
        return tsVaderOverleden;
    }

    public void setTsVaderOverleden(boolean tsVaderOverleden) {
        this.tsVaderOverleden = tsVaderOverleden;
    }

    public boolean getTsMoederOverleden() {
        return tsMoederOverleden;
    }

    public void setTsMoederOverleden(boolean tsMoederOverleden) {
        this.tsMoederOverleden = tsMoederOverleden;
    }

    public boolean getTsBroerOverleden() {
        return tsBroerOverleden;
    }

    public void setTsBroerOverleden(boolean tsBroerOverleden) {
        this.tsBroerOverleden = tsBroerOverleden;
    }

    public boolean getTsZusOverleden() {
        return tsZusOverleden;
    }

    public void setTsZusOverleden(boolean tsZusOverleden) {
        this.tsZusOverleden = tsZusOverleden;
    }

    public boolean getTsErnstigZiekFamilieLid() {
        return tsErnstigZiekFamilieLid;
    }

    public void setTsErnstigZiekFamilieLid(boolean tsErnstigZiekFamilieLid) {
        this.tsErnstigZiekFamilieLid = tsErnstigZiekFamilieLid;
    }

    public boolean getTsOnderToezichtOfJeugdinstelling() {
        return tsOnderToezichtOfJeugdinstelling;
    }

    public void setTsOnderToezichtOfJeugdinstelling(boolean tsOnderToezichtOfJeugdinstelling) {
        this.tsOnderToezichtOfJeugdinstelling = tsOnderToezichtOfJeugdinstelling;
    }

    public boolean getTsInternaatsLeerling() {
        return tsInternaatsLeerling;
    }

    public void setTsInternaatsLeerling(boolean tsInternaatsLeerling) {
        this.tsInternaatsLeerling = tsInternaatsLeerling;
    }

    public boolean getTsCoOuderschap() {
        return tsCoOuderschap;
    }

    public void setTsCoOuderschap(boolean tsCoOuderschap) {
        this.tsCoOuderschap = tsCoOuderschap;
    }

    public boolean getTsHoedderechtVader() {
        return tsHoedderechtVader;
    }

    public void setTsHoedderechtVader(boolean tsHoedderechtVader) {
        this.tsHoedderechtVader = tsHoedderechtVader;
    }

    public boolean getTsHoedderechtMoeder() {
        return tsHoedderechtMoeder;
    }

    public void setTsHoedderechtMoeder(boolean tsHoedderechtMoeder) {
        this.tsHoedderechtMoeder = tsHoedderechtMoeder;
    }

    public boolean getTsZonderVasteVerblijfPlaats() {
        return tsZonderVasteVerblijfPlaats;
    }

    public void setTsZonderVasteVerblijfPlaats(boolean tsZonderVasteVerblijfPlaats) {
        this.tsZonderVasteVerblijfPlaats = tsZonderVasteVerblijfPlaats;
    }

    public String getgAndere() {
        return gAndere;
    }

    public void setgAndere(String gAndere) {
        this.gAndere = gAndere;
    }

    public String getNiHuisArts() {
        return niHuisArts;
    }

    public void setNiHuisArts(String niHuisArts) {
        this.niHuisArts = niHuisArts;
    }

    public String getNiHuisArtsStraat() {
        return niHuisArtsStraat;
    }

    public void setNiHuisArtsStraat(String niHuisArtsStraat) {
        this.niHuisArtsStraat = niHuisArtsStraat;
    }

    public String getNiHuisArtsTelefoon() {
        return niHuisArtsTelefoon;
    }

    public void setNiHuisArtsTelefoon(String niHuisArtsTelefoon) {
        this.niHuisArtsTelefoon = niHuisArtsTelefoon;
    }

    public String getNiCommunicatieOudersRechtstreeks() {
        return niCommunicatieOudersRechtstreeks;
    }

    public void setNiCommunicatieOudersRechtstreeks(String niCommunicatieOudersRechtstreeks) {
        this.niCommunicatieOudersRechtstreeks = niCommunicatieOudersRechtstreeks;
    }

    public String getNiCommunicatieOudersVia() {
        return niCommunicatieOudersVia;
    }

    public void setNiCommunicatieOudersVia(String niCommunicatieOudersVia) {
        this.niCommunicatieOudersVia = niCommunicatieOudersVia;
    }

    public boolean getNiGemotiveerdVerslag() {
        return niGemotiveerdVerslag;
    }

    public void setNiGemotiveerdVerslag(boolean niGemotiveerdVerslag) {
        this.niGemotiveerdVerslag = niGemotiveerdVerslag;
    }

    public boolean getNiVerslag() {
        return niVerslag;
    }

    public void setNiVerslag(boolean niVerslag) {
        this.niVerslag = niVerslag;
    }

    public boolean getNiMeerwaardeOuders() {
        return niMeerwaardeOuders;
    }

    public void setNiMeerwaardeOuders(boolean niMeerwaardeOuders) {
        this.niMeerwaardeOuders = niMeerwaardeOuders;
    }

    public String getNiMeerwaardeUitleg() {
        return niMeerwaardeUitleg;
    }

    public void setNiMeerwaardeUitleg(String niMeerwaardeUitleg) {
        this.niMeerwaardeUitleg = niMeerwaardeUitleg;
    }

    public int getLBOJaar1() {
        return LBOJaar1;
    }

    public void setLBOJaar1(int LBOJaar1) {
        this.LBOJaar1 = LBOJaar1;
    }

    public String getLBOschool1() {
        return LBOSchool1;
    }

    public void setLBOschool1(String LBOschool1) {
        this.LBOSchool1 = LBOschool1;
    }

    public String getLBOInstellingsnr1() {
        return LBOInstellingsnr1;
    }

    public void setLBOInstellingsnr1(String LBOInstellingsnr1) {
        this.LBOInstellingsnr1 = LBOInstellingsnr1;
    }

    public String getLBOGedubbeld1() {
        return LBOGedubbeld1;
    }

    public void setLBOGedubbeld1(String LBOGedubbeld1) {
        this.LBOGedubbeld1 = LBOGedubbeld1;
    }

    public int getLBOJaar2() {
        return LBOJaar2;
    }

    public void setLBOJaar2(int LBOJaar2) {
        this.LBOJaar2 = LBOJaar2;
    }

    public String getLBOschool2() {
        return LBOSchool2;
    }

    public void setLBOschool2(String LBOschool2) {
        this.LBOSchool2 = LBOschool2;
    }

    public String getLBOInstellingsnr2() {
        return LBOInstellingsnr2;
    }

    public void setLBOInstellingsnr2(String LBOInstellingsnr2) {
        this.LBOInstellingsnr2 = LBOInstellingsnr2;
    }

    public String getLBOGedubbeld2() {
        return LBOGedubbeld2;
    }

    public void setLBOGedubbeld2(String LBOGedubbeld2) {
        this.LBOGedubbeld2 = LBOGedubbeld2;
    }

    public int getLSOJaar1() {
        return LSOJaar1;
    }

    public void setLSOJaar1(int LSOJaar1) {
        this.LSOJaar1 = LSOJaar1;
    }

    public String getLSOSchool1() {
        return LSOSchool1;
    }

    public void setLSOSchool1(String LSOSchool1) {
        this.LSOSchool1 = LSOSchool1;
    }

    public String getLSOInstellingsnr1() {
        return LSOInstellingsnr1;
    }

    public void setLSOInstellingsnr1(String LSOInstellingsnr1) {
        this.LSOInstellingsnr1 = LSOInstellingsnr1;
    }

    public String getLSOAttestAdvies1() {
        return LSOAttestAdvies1;
    }

    public void setLSOAttestAdvies1(String LSOAttestAdvies1) {
        this.LSOAttestAdvies1 = LSOAttestAdvies1;
    }

    public int getLSOJaar2() {
        return LSOJaar2;
    }

    public void setLSOJaar2(int LSOJaar2) {
        this.LSOJaar2 = LSOJaar2;
    }

    public String getLSOSchool2() {
        return LSOSchool2;
    }

    public void setLSOSchool2(String LSOSchool2) {
        this.LSOSchool2 = LSOSchool2;
    }

    public String getLSOInstellingsnr2() {
        return LSOInstellingsnr2;
    }

    public void setLSOInstellingsnr2(String LSOInstellingsnr2) {
        this.LSOInstellingsnr2 = LSOInstellingsnr2;
    }

    public String getLSOAttestAdvies2() {
        return LSOAttestAdvies2;
    }

    public void setLSOAttestAdvies2(String LSOAttestAdvies2) {
        this.LSOAttestAdvies2 = LSOAttestAdvies2;
    }

    public int getLSOJaar3() {
        return LSOJaar3;
    }

    public void setLSOJaar3(int LSOJaar3) {
        this.LSOJaar3 = LSOJaar3;
    }

    public String getLSOSchool3() {
        return LSOSchool3;
    }

    public void setLSOSchool3(String LSOSchool3) {
        this.LSOSchool3 = LSOSchool3;
    }

    public String getLSOInstellingsnr3() {
        return LSOInstellingsnr3;
    }

    public void setLSOInstellingsnr3(String LSOInstellingsnr3) {
        this.LSOInstellingsnr3 = LSOInstellingsnr3;
    }

    public String getLSOAttestAdvies3() {
        return LSOAttestAdvies3;
    }

    public void setLSOAttestAdvies3(String LSOAttestAdvies3) {
        this.LSOAttestAdvies3 = LSOAttestAdvies3;
    }

    public boolean getIADD() {
        return IADD;
    }

    public void setIADD(boolean IADD) {
        this.IADD = IADD;
    }

    public boolean getIADHD() {
        return IADHD;
    }

    public void setIADHD(boolean IADHD) {
        this.IADHD = IADHD;
    }

    public boolean getIASS() {
        return IASS;
    }

    public void setIASS(boolean IASS) {
        this.IASS = IASS;
    }

    public boolean getINLD() {
        return INLD;
    }

    public void setINLD(boolean INLD) {
        this.INLD = INLD;
    }

    public boolean getIReserve() {
        return IReserve;
    }

    public void setIReserve(boolean IReserve) {
        this.IReserve = IReserve;
    }

    public boolean getIFobie() {
        return IFobie;
    }

    public void setIFobie(boolean IFobie) {
        this.IFobie = IFobie;
    }

    public boolean getIConcentratie() {
        return IConcentratie;
    }

    public void setIConcentratie(boolean IConcentratie) {
        this.IConcentratie = IConcentratie;
    }

    public boolean getIGillesDeLaTourette() {
        return IGillesDeLaTourette;
    }

    public void setIGillesDeLaTourette(boolean IGillesDeLaTourette) {
        this.IGillesDeLaTourette = IGillesDeLaTourette;
    }

    public String getIAndereInfo() {
        return IAndereInfo;
    }

    public void setIAndereInfo(String IAndereInfo) {
        this.IAndereInfo = IAndereInfo;
    }

    public boolean getLZDyscalculie() {
        return LZDyscalculie;
    }

    public void setLZDyscalculie(boolean LZDyscalculie) {
        this.LZDyscalculie = LZDyscalculie;
    }

    public boolean getLZDyslexie() {
        return LZDyslexie;
    }

    public void setLZDyslexie(boolean LZDyslexie) {
        this.LZDyslexie = LZDyslexie;
    }

    public boolean getLZDysorthografie() {
        return LZDysorthografie;
    }

    public void setLZDysorthografie(boolean LZDysorthografie) {
        this.LZDysorthografie = LZDysorthografie;
    }

    public boolean getLZDyspraxie() {
        return LZDyspraxie;
    }

    public void setLZDyspraxie(boolean LZDyspraxie) {
        this.LZDyspraxie = LZDyspraxie;
    }

    public boolean getLZFaalangst() {
        return LZFaalangst;
    }

    public void setLZFaalangst(boolean LZFaalangst) {
        this.LZFaalangst = LZFaalangst;
    }

    public boolean getLZHoogbegaafd() {
        return LZHoogbegaafd;
    }

    public void setLZHoogbegaafd(boolean LZHoogbegaafd) {
        this.LZHoogbegaafd = LZHoogbegaafd;
    }

    public boolean getLZTaalproblemen() {
        return LZTaalproblemen;
    }

    public void setLZTaalproblemen(boolean LZTaalproblemen) {
        this.LZTaalproblemen = LZTaalproblemen;
    }

    public boolean getLZHoogsensitief() {
        return LZHoogsensitief;
    }

    public void setLZHoogsensitief(boolean LZHoogsensitief) {
        this.LZHoogsensitief = LZHoogsensitief;
    }

    public String getLZAndereInfo() {
        return LZAndereInfo;
    }

    public void setLZAndereInfo(String LZAndereInfo) {
        this.LZAndereInfo = LZAndereInfo;
    }

    public boolean getMGAllergie() {
        return MGAllergie;
    }

    public void setMGAllergie(boolean MGAllergie) {
        this.MGAllergie = MGAllergie;
    }

    public boolean getMGAstma() {
        return MGAstma;
    }

    public void setMGAstma(boolean MGAstma) {
        this.MGAstma = MGAstma;
    }

    public boolean getMGEpilepsie() {
        return MGEpilepsie;
    }

    public void setMGEpilepsie(boolean MGEpilepsie) {
        this.MGEpilepsie = MGEpilepsie;
    }

    public boolean getMGGehoorprobleem() {
        return MGGehoorprobleem;
    }

    public void setMGGehoorprobleem(boolean MGGehoorprobleem) {
        this.MGGehoorprobleem = MGGehoorprobleem;
    }

    public boolean getMGZichtsprobleem() {
        return MGZichtsprobleem;
    }

    public void setMGZichtsprobleem(boolean MGZichtsprobleem) {
        this.MGZichtsprobleem = MGZichtsprobleem;
    }

    public boolean getMGHooikoorts() {
        return MGHooikoorts;
    }

    public void setMGHooikoorts(boolean MGHooikoorts) {
        this.MGHooikoorts = MGHooikoorts;
    }

    public boolean getMGMigraine() {
        return MGMigraine;
    }

    public void setMGMigraine(boolean MGMigraine) {
        this.MGMigraine = MGMigraine;
    }

    public boolean getMGReuma() {
        return MGReuma;
    }

    public void setMGReuma(boolean MGReuma) {
        this.MGReuma = MGReuma;
    }

    public boolean getMGHartafwijking() {
        return MGHartafwijking;
    }

    public void setMGHartafwijking(boolean MGHartafwijking) {
        this.MGHartafwijking = MGHartafwijking;
    }

    public boolean getMGDiabetes() {
        return MGDiabetes;
    }

    public void setMGDiabetes(boolean MGDiabetes) {
        this.MGDiabetes = MGDiabetes;
    }

    public boolean getMGLactoreIntolerantie() {
        return MGLactoreIntolerantie;
    }

    public void setMGLactoreIntolerantie(boolean MGLactoreIntolerantie) {
        this.MGLactoreIntolerantie = MGLactoreIntolerantie;
    }

    public boolean getMGMotorischeProblemen() {
        return MGMotorischeProblemen;
    }

    public void setMGMotorischeProblemen(boolean MGMotorischeProblemen) {
        this.MGMotorischeProblemen = MGMotorischeProblemen;
    }

    public boolean getMGZindelijkheid() {
        return MGZindelijkheid;
    }

    public void setMGZindelijkheid(boolean MGZindelijkheid) {
        this.MGZindelijkheid = MGZindelijkheid;
    }

    public String getMGAndereInfo() {
        return MGAndereInfo;
    }

    public void setMGAndereInfo(String MGAndereInfo) {
        this.MGAndereInfo = MGAndereInfo;
    }

    public boolean getMRilatine() {
        return MRilatine;
    }

    public void setMRilatine(boolean MRilatine) {
        this.MRilatine = MRilatine;
    }

    public boolean getMConcerta() {
        return MConcerta;
    }

    public void setMConcerta(boolean MConcerta) {
        this.MConcerta = MConcerta;
    }

    public boolean getMRisperdal() {
        return MRisperdal;
    }

    public void setMRisperdal(boolean MRisperdal) {
        this.MRisperdal = MRisperdal;
    }

    public String getMAndereInfo() {
        return MAndereInfo;
    }

    public void setMAndereInfo(String MAndereInfo) {
        this.MAndereInfo = MAndereInfo;
    }

    public String getBISterkePunten() {
        return BISterkePunten;
    }

    public void setBISterkePunten(String BISterkePunten) {
        this.BISterkePunten = BISterkePunten;
    }

    public String getBICompetitiesport() {
        return BICompetitiesport;
    }

    public void setBICompetitiesport(String BICompetitiesport) {
        this.BICompetitiesport = BICompetitiesport;
    }

    public String getBICompetitiesportInfo() {
        return BICompetitiesportInfo;
    }

    public void setBICompetitiesportInfo(String BICompetitiesportInfo) {
        this.BICompetitiesportInfo = BICompetitiesportInfo;
    }

    public String getBIAndere() {
        return BIAndere;
    }

    public void setBIAndere(String BIAndere) {
        this.BIAndere = BIAndere;
    }

    public String getBIKlasgenoten() {
        return BIKlasgenoten;
    }

    public void setBIKlasgenoten(String BIKlasgenoten) {
        this.BIKlasgenoten = BIKlasgenoten;
    }

    public String getBIMiddagpas() {
        return BIMiddagpas;
    }

    public void setBIMiddagpas(String BIMiddagpas) {
        this.BIMiddagpas = BIMiddagpas;
    }

    public String getBIKeuze() {
        return BIKeuze;
    }

    public void setBIKeuze(String BIKeuze) {
        this.BIKeuze = BIKeuze;
    }

    public String getBiLeesNiveau() {
        return BiLeesNiveau;
    }

    public void setBiLeesNiveau(String biLeesNiveau) {
        BiLeesNiveau = biLeesNiveau;
    }

    public String getLeerlingDringendeGevallen() {
        return leerlingDringendeGevallen;
    }

    public void setLeerlingDringendeGevallen(String leerlingDringendeGevallen) {
        this.leerlingDringendeGevallen = leerlingDringendeGevallen;
    }

    public String getInternet() {
        return internet;
    }

    public void setInternet(String internet) {
        this.internet = internet;
    }

    public String getVaderVoornaam() {
        return vaderVoornaam;
    }

    public void setVaderVoornaam(String vaderVoornaam) {
        this.vaderVoornaam = vaderVoornaam;
    }

    public String getVaderBeroep() {
        return vaderBeroep;
    }

    public void setVaderBeroep(String vaderBeroep) {
        this.vaderBeroep = vaderBeroep;
    }

    public String getVaderNationaliteit() {
        return vaderNationaliteit;
    }

    public void setVaderNationaliteit(String vaderNationaliteit) {
        this.vaderNationaliteit = vaderNationaliteit;
    }

    public int getVaderNationaliteitID() {
        return vaderNationaliteitID;
    }

    public void setVaderNationaliteitID(int vaderNationaliteitID) {
        this.vaderNationaliteitID = vaderNationaliteitID;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getWisaNr() {
        return wisaNr;
    }

    public void setWisaNr(int wisaNr) {
        this.wisaNr = wisaNr;
    }

    public String getGebruikersnaam() {
        return gebruikersnaam;
    }

    public void setGebruikersnaam(String gebruikersnaam) {
        this.gebruikersnaam = gebruikersnaam;
    }

    public int getVolgnrURS() {
        return volgnrURS;
    }

    public void setVolgnrURS(int volgnrURS) {
        this.volgnrURS = volgnrURS;
    }

    public int getVolgnrAMA() {
        return volgnrAMA;
    }

    public void setVolgnrAMA(int volgnrAMA) {
        this.volgnrAMA = volgnrAMA;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public Date getDatumInschrijving() {
        return datumInschrijving;
    }

    public void setDatumInschrijving(Date datumInschrijving) {
        this.datumInschrijving = datumInschrijving;
    }

    public Date getDatumWijziging() {
        return datumWijziging;
    }

    public void setDatumWijziging(Date datumWijziging) {
        this.datumWijziging = datumWijziging;
    }

    public String getLeerjaar() {
        return leerjaar;
    }

    public void setLeerjaar(String leerjaar) {
        this.leerjaar = leerjaar;
    }

    public String getStudieRichting() {
        return studieRichting;
    }

    public void setStudieRichting(String studieRichting) {
        this.studieRichting = studieRichting;
    }

    public String getNaam() {
        return naam;
    }

    public void setNaam(String naam) {
        this.naam = naam;
    }

    public String getVoornaam() {
        return voornaam;
    }

    public void setVoornaam(String voornaam) {
        this.voornaam = voornaam;
    }

    public String getRoepnaam() {
        return roepnaam;
    }

    public void setRoepnaam(String roepnaam) {
        this.roepnaam = roepnaam;
    }

    public String getGeslacht() {
        return geslacht;
    }

    public void setGeslacht(String geslacht) {
        this.geslacht = geslacht;
    }

    public int getGeboorteGemeenteID() {
        return geboorteGemeenteID;
    }

    public void setGeboorteGemeenteID(int geboorteGemeenteID) {
        this.geboorteGemeenteID = geboorteGemeenteID;
    }

    public String getGeboorteplaats() {
        return geboorteplaats;
    }

    public void setGeboorteplaats(String geboorteplaats) {
        this.geboorteplaats = geboorteplaats;
    }

    public Date getGeboorteDatum() {
        return geboorteDatum;
    }

    public void setGeboorteDatum(Date geboorteDatum) {
        this.geboorteDatum = geboorteDatum;
    }

    public String getRijksregisternummer() {
        return rijksregisternummer;
    }

    public void setRijksregisternummer(String rijksregisternummer) {
        this.rijksregisternummer = rijksregisternummer;
    }

    public String getNationaliteit() {
        return nationaliteit;
    }

    public void setNationaliteit(String nationaliteit) {
        this.nationaliteit = nationaliteit;
    }

    public int getNationaliteitID() {
        return nationaliteitID;
    }

    public void setNationaliteitID(int nationaliteitID) {
        this.nationaliteitID = nationaliteitID;
    }

    public int getLandID() {
        return landID;
    }

    public void setLandID(int landID) {
        this.landID = landID;
    }

    public String getLeerlingStraat() {
        return leerlingStraat;
    }

    public void setLeerlingStraat(String leerlingStraat) {
        this.leerlingStraat = leerlingStraat;
    }

    public String getLeerlingNr() {
        return leerlingNr;
    }

    public void setLeerlingNr(String leerlingNr) {
        this.leerlingNr = leerlingNr;
    }

    public String getLeerlingBus() {
        return leerlingBus;
    }

    public void setLeerlingBus(String leerlingBus) {
        this.leerlingBus = leerlingBus;
    }

    public String getLeerlingGemeente() {
        return leerlingGemeente;
    }

    public void setLeerlingGemeente(String leerlingGemeente) {
        this.leerlingGemeente = leerlingGemeente;
    }

    public int getLeerlingGemeenteID() {
        return leerlingGemeenteID;
    }

    public void setLeerlingGemeenteID(int leerlingGemeenteID) {
        this.leerlingGemeenteID = leerlingGemeenteID;
    }

    public String getLeerlingPostcode() {
        return leerlingPostcode;
    }

    public void setLeerlingPostcode(String leerlingPostcode) {
        this.leerlingPostcode = leerlingPostcode;
    }

    public String getLeerlingTelefoon() {
        return leerlingTelefoon;
    }

    public void setLeerlingTelefoon(String leerlingTelefoon) {
        this.leerlingTelefoon = leerlingTelefoon;
    }

    public String getLeerlingNoodTelefoon() {
        return leerlingNoodTelefoon;
    }

    public void setLeerlingNoodTelefoon(String leerlingNoodTelefoon) {
        this.leerlingNoodTelefoon = leerlingNoodTelefoon;
    }

    public int getLeerlingNoodTelefoonBijID() {
        return leerlingNoodTelefoonBijID;
    }

    public void setLeerlingNoodTelefoonBijID(int leerlingNoodTelefoonBijID) {
        this.leerlingNoodTelefoonBijID = leerlingNoodTelefoonBijID;
    }

    public String getLeerlingGSM() {
        return leerlingGSM;
    }

    public void setLeerlingGSM(String leerlingGSM) {
        this.leerlingGSM = leerlingGSM;
    }

    public String getLeerlingEmail() {
        return leerlingEmail;
    }

    public void setLeerlingEmail(String leerlingEmail) {
        this.leerlingEmail = leerlingEmail;
    }
    //endregion
}
