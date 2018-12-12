package testBackendReader;

import java.awt.*;
import java.util.Date;

/**
 * Created by 11502064 on 10/10/2018.
 */

public class CardData {
    private String cardNumber;
    private String chipNumber;
    private Date validFrom;
    private Date validTo;
    private String municipality;
    private String nationalNumber;
    private String name;
    private String firstNameOne;
    private String firstNameThree;
    private String nationality;
    private String birthPlace;
    private Date birthDate;
    private char sex;
    private String nobleCondition;
    private long documentType;
    private String whiteCane;
    private String secondCane;
    private String extendedMinority;

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    byte[] image;

    public CardData(String cardNumber, String chipNumber, Date validFrom, Date validTo,
                    String municipality, String nationalNumber, String name, String firstNameOne,
                    String firstNameThree, String nationality, String birthPlace, Date birthDate,
                    char sex, String nobleCondition, long documentType, String whiteCane,
                    String secondCane, String extendedMinority, byte[] image) {
        this.cardNumber = cardNumber;
        this.chipNumber = chipNumber;
        this.validFrom = validFrom;
        this.validTo = validTo;
        this.municipality = municipality;
        this.nationalNumber = nationalNumber;
        this.name = name;
        this.firstNameOne = firstNameOne;
        this.firstNameThree = firstNameThree;
        this.nationality = nationality;
        this.birthPlace = birthPlace;
        this.birthDate = birthDate;
        this.sex = sex;
        this.nobleCondition = nobleCondition;
        this.documentType = documentType;
        this.whiteCane = whiteCane;
        this.secondCane = secondCane;
        this.extendedMinority = extendedMinority;
        this.image = image;
    }

    public CardData() {
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getChipNumber() {
        return chipNumber;
    }

    public void setChipNumber(String chipNumber) {
        this.chipNumber = chipNumber;
    }

    public Date getValidFrom() {
        return validFrom;
    }

    public void setValidFrom(Date validFrom) {
        this.validFrom = validFrom;
    }

    public Date getValidTo() {
        return validTo;
    }

    public void setValidTo(Date validTo) {
        this.validTo = validTo;
    }

    public String getMunicipality() {
        return municipality;
    }

    public void setMunicipality(String municipality) {
        this.municipality = municipality;
    }

    public String getNationalNumber() {
        return nationalNumber;
    }

    public void setNationalNumber(String nationalNumber) {
        this.nationalNumber = nationalNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFirstNameOne() {
        return firstNameOne;
    }

    public void setFirstNameOne(String firstNameOne) {
        this.firstNameOne = firstNameOne;
    }

    public String getFirstNameThree() {
        return firstNameThree;
    }

    public void setFirstNameThree(String firstNameThree) {
        this.firstNameThree = firstNameThree;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getBirthPlace() {
        return birthPlace;
    }

    public void setBirthPlace(String birthPlace) {
        this.birthPlace = birthPlace;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public char getSex() {
        return sex;
    }

    public void setSex(char sex) {
        this.sex = sex;
    }

    public String getNobleCondition() {
        return nobleCondition;
    }

    public void setNobleCondition(String nobleCondition) {
        this.nobleCondition = nobleCondition;
    }

    public long getDocumentType() {
        return documentType;
    }

    public void setDocumentType(long documentType) {
        this.documentType = documentType;
    }

    public String getWhiteCane() {
        return whiteCane;
    }

    public void setWhiteCane(String whiteCane) {
        this.whiteCane = whiteCane;
    }

    public String getSecondCane() {
        return secondCane;
    }

    public void setSecondCane(String secondCane) {
        this.secondCane = secondCane;
    }

    public String getExtendedMinority() {
        return extendedMinority;
    }

    public void setExtendedMinority(String extendedMinority) {
        this.extendedMinority = extendedMinority;
    }
}
