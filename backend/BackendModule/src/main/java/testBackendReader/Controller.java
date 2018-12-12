package testBackendReader;

import be.belgium.eid.eidlib.BeID;
import be.belgium.eid.exceptions.EIDException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static java.lang.System.out;

/**
 * Created by 11502064 on 9/10/2018.
 */

@CrossOrigin(origins = "*")
@RequestMapping(value = "/api")
@RestController
public class Controller {


    @Autowired
    private InschrijvingRepository inschrijvingRepository;

    @Autowired
    private GemeenteRepository gemeenteRepository;

    @Autowired
    private HuisdokterRepository huisdokterRepository;

    @RequestMapping(value = "/add", method = RequestMethod.POST,  consumes = "application/json")
    public Inschrijving create(@RequestBody Inschrijving inschrijving){

        return inschrijvingRepository.save(inschrijving);
    }

    @RequestMapping(value = "/getDokters")
    public List<Huisdokter> getHuisdokters() { return huisdokterRepository.findAll(); }

    @RequestMapping(value = "/getGemeentes", method = RequestMethod.GET)
    public List<Gemeente> getGemeentes() {
        return gemeenteRepository.findAll();
    }

    @RequestMapping(value = "/getInschrijvingen", method = RequestMethod.GET)
    public List<Inschrijving> getInschrijvingen(){
        return inschrijvingRepository.findAll();
    }

    @RequestMapping(value = "/getByCode/{code}", method = RequestMethod.GET)
    public Optional<Inschrijving> getInschrijving(@PathVariable String code) { return inschrijvingRepository.findInschrijvingByCode(code); }

    @RequestMapping(value = "/card", method = RequestMethod.GET)
    public CardData cardRead(){
        BeID eID = new BeID(true);

        out.println("Starting reading process");

        CardData data = new CardData();
        try {
            data.setBirthDate(eID.getIDData().getBirthDate());
            data.setBirthPlace(eID.getIDData().getBirthPlace());
            data.setCardNumber(eID.getIDData().getCardNumber());
            data.setChipNumber(eID.getIDData().getChipNumber());
            data.setDocumentType(eID.getIDData().getDocumentType());
            data.setFirstNameOne(eID.getIDData().get1stFirstname());
            data.setFirstNameThree(eID.getIDData().get3rdFirstname());
            data.setMunicipality(eID.getIDData().getMunicipality());
            data.setName(eID.getIDData().getName());
            data.setNationality(eID.getIDData().getNationality());
            data.setNationalNumber(eID.getIDData().getNationalNumber());
            data.setNobleCondition(eID.getIDData().getNobleCondition());
            data.setSex(eID.getIDData().getSex());
            data.setValidFrom(eID.getIDData().getValidFrom());
            data.setValidTo(eID.getIDData().getValidTo());
            data.setImage(eID.getIDPhoto().getPhoto());

//            try {
//                eID.getIDPhoto().writeToFile(eID.getIDData().getName());
//            } catch (IOException e) {
//                e.printStackTrace();
//            }

            System.out.println("Done");
            return data;
        } catch (EIDException e) {
            e.printStackTrace();
        }

        return data;
    }
}
