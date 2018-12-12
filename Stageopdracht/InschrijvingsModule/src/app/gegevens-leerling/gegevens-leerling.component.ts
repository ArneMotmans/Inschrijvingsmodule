import { environment } from './../../environments/environment.prod';
import { AES, enc } from 'crypto-ts';
import { Router } from '@angular/router';
import { InschrijvingCheckComponent } from './../inschrijving-check/inschrijving-check.component';
import { FormGroup } from '@angular/forms/src/model';
import { InschrijvingService } from './../services/inschrijving.service';
import { Inschrijving } from './../model/inschrijving';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { GemeenteService } from 'src/app/services/gemeente.service';
import { Gemeente } from 'src/app/model/gemeente';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-gegevens-leerling',
  templateUrl: './gegevens-leerling.component.html',
  styleUrls: ['./gegevens-leerling.component.css']
})
export class GegevensLeerlingComponent implements OnInit {
  inschrijving: Inschrijving;

  personen: String[] = ["Broer", "Zus", "Buren", "enz."];
  countries: string[] = ["Afghanistan", "Aland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla",
    "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas",
    "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia(Plurinational State of) ",
    "Bonaire, Sint Eustatius and Saba", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory",
    "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Cayman Islands",
    "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos(Keeling) Islands", "Colombia", "Comoros", "Congo",
    "Congo(Democratic Republic of the) ", "Cook Islands", "Costa Rica", "Cote d'Ivoire",
    "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands(Malvinas)",
    "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon",
    "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala",
    "Guernsey", "Guinea", "Guinea - Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See", "Honduras", "Hong Kong",
    "Hungary", "Iceland", "India", "Indonesia", "Iran(Islamic Republic of) ", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica",
    "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea(Democratic People's Republic of)", "Korea(Republic of) ",
    "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
    "Lithuania", "Luxembourg", "Macao", "Macedonia(the former Yugoslav Republic of) ", "Madagascar", "Malawi", "Malaysia", "Maldives",
    "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia(Federated States of)",
    "Moldova(Republic of) ", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru",
    "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands",
    "Norway", "Oman", "Pakistan", "Palau", "Palestine, State of", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn",
    "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Barthelemy",
    "Saint Helena, Ascension and Tristan da Cunha", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin(French part) ",
    "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
    "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten(Dutch part) ", "Slovakia",
    "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Sudan",
    "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic",
    "Taiwan, Province of China[a]", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Timor - Leste", "Togo", "Tokelau", "Tonga",
    "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
    "United Kingdom of Great Britain and Northern Ireland", "United States of America", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan",
    "Vanuatu", "Venezuela(Bolivarian Republic of) ", "Viet Nam", "Virgin Islands(British) ", "Virgin Islands(U.S.)",
    "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"];
  deelgemeentes: string[] = [];
  gemeentes: Gemeente[] = [];

  roepnaam = new FormControl('', []);
  geslacht = new FormControl('', []);
  bus = new FormControl('', []);
  rijksregisternummer = new FormControl('', []);
  telefoon = new FormControl('', []);
  gsm = new FormControl('', []);
  noodtelefoon = new FormControl('', []);
  noodnummer = new FormControl('', []);
  // geboorteplaats = new FormControl('', [Validators.required]);
  geboorteplaatsCtrl = new FormControl('', [Validators.required]);
  nationaliteitCtrl = new FormControl('', [Validators.required]);
  straat = new FormControl('', [Validators.required]);
  nummer = new FormControl('', [Validators.required]);
  gemeente = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  internet = new FormControl('', []);

  naamStud: string;
  voornaamStud: string;
  geboorteplaatsStud: string;
  roepnaamStud: string;
  rijksRegisterNummerStud: string;
  nationaliteitStud: string;
  straatStud: string;
  huisnummerStud: string;
  postcodeStud: string;
  gemeenteStud: string;
  telefoonStud: string;
  gsmStud: string;
  noodTelefoonStud: string;
  noodnummerPers: string;
  emailStud: string;
  geslachtStud: string;
  internetStud: string;
  studieRichtingStud: string;
  filteredNationaliteiten: Observable<string[]>;
  filteredGemeenten: Observable<Gemeente[]>;


  constructor(private service: InschrijvingService, private router: Router, private gemeenteService: GemeenteService, public dialog: MatDialog) {
    console.log("Studiejaar:  " + this.service.jaar);

    this.gemeenteService.getAllGemeentes().subscribe(res => {
      var data = JSON.stringify(res.json());
      res.json().forEach(element => {
        var gemeente = new Gemeente();
        var obj = JSON.parse(JSON.stringify(element));

        gemeente.deelgemeente = obj.deelGemeente;
        gemeente.fusiegemeente = obj.fusieGemeente;
        gemeente.postcode = obj.postcode;
        gemeente.ID = obj.id;
        gemeente.land = obj.land;
        gemeente.NISCode = obj.niscode;
        gemeente.postnummer = obj.postnummer;
        gemeente.RecordType = obj.recordType;

        this.gemeentes.push(gemeente);
      });
      // for(let item of this.gemeentes){
      //   if (true){
      //     this.deelgemeentes.push(item.deelgemeente);
      //   }
      // }
    });

  }

  ngOnInit() {
    console.log("Dit moet een gevulde array zijn", this.gemeentes);
    console.log("Boolean:  " + this.service.getBool());

    this.filteredGemeenten = this.geboorteplaatsCtrl.valueChanges
      .pipe(
      startWith(''),
      map(value => this._filterGemeente(value))
      );

    this.filteredNationaliteiten = this.nationaliteitCtrl.valueChanges
      .pipe(
      startWith(''),
      map(value => this._filter(value))
      );


    this.inschrijving = new Inschrijving();
    this.inschrijving = this.service.getLocalInschrijving();

    if (this.inschrijving.rijksregisternummer != null) {
      this.inschrijving.rijksregisternummer = AES.decrypt(this.inschrijving.rijksregisternummer, environment.tmpAESkey).toString(enc.Utf8);
    }

    if (this.inschrijving.leerlingTelefoon != null) {
      this.inschrijving.leerlingTelefoon = AES.decrypt(this.inschrijving.leerlingTelefoon, environment.tmpAESkey).toString(enc.Utf8);
    }

    if (this.inschrijving.leerlingGSM != null) {
      this.inschrijving.leerlingGSM = AES.decrypt(this.inschrijving.leerlingGSM, environment.tmpAESkey).toString(enc.Utf8);
    }

    if (this.inschrijving.leerlingEmail != null) {
      this.inschrijving.leerlingEmail = AES.decrypt(this.inschrijving.leerlingEmail, environment.tmpAESkey).toString(enc.Utf8);
    }

    this.naamStud = this.inschrijving.naam;
    this.voornaamStud = this.inschrijving.voornaam;

    this.studieRichtingStud = this.inschrijving.studieRichting;
    this.roepnaamStud = this.inschrijving.roepnaam;
    this.nationaliteitStud = this.inschrijving.nationaliteit;
    this.straatStud = this.inschrijving.leerlingStraat;
    this.huisnummerStud = this.inschrijving.leerlingNr;
    this.postcodeStud = this.inschrijving.leerlingPostcode;
    this.telefoonStud = this.inschrijving.leerlingTelefoon;
    this.gsmStud = this.inschrijving.leerlingGSM;
    this.noodTelefoonStud = this.inschrijving.leerlingNoodTelefoon;
    this.emailStud = this.inschrijving.leerlingEmail;
    this.internetStud = this.inschrijving.internet;
    this.geslachtStud = this.inschrijving.geslacht;
    this.geboorteplaatsStud = this.inschrijving.geboorteplaats;
    this.nationaliteitStud = this.inschrijving.nationaliteit;
    this.gemeenteStud = this.inschrijving.leerlingGemeente;
    this.rijksRegisterNummerStud = this.inschrijving.rijksregisternummer;

  }

  private _filterGemeente(value: string): Gemeente[] {
    const filterValue = value.toLowerCase();

    return this.gemeentes.filter(gemeente => gemeente.deelgemeente.toLowerCase().includes(filterValue));
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.countries.filter(nationaliteit => nationaliteit.toLowerCase().includes(filterValue));
  }

  logInschrijving() {
    this.inschrijving.naam = this.naamStud;
    this.inschrijving.voornaam = this.voornaamStud;
    this.inschrijving.geboorteplaats = this.geboorteplaatsStud;
    this.inschrijving.roepnaam = this.roepnaamStud;
    this.inschrijving.rijksregisternummer = this.rijksRegisterNummerStud;
    this.inschrijving.leerlingStraat = this.straatStud;
    this.inschrijving.leerlingNr = this.huisnummerStud;
    this.inschrijving.leerlingPostcode = this.postcodeStud;
    this.inschrijving.leerlingGemeente = this.gemeenteStud;
    this.inschrijving.leerlingTelefoon = this.telefoonStud;
    this.inschrijving.nationaliteit = this.nationaliteitStud;
    this.inschrijving.leerlingGSM = this.gsmStud;
    this.inschrijving.leerlingNoodTelefoon = this.noodTelefoonStud;
    this.inschrijving.leerlingEmail = this.emailStud;
    this.inschrijving.geslacht = this.geslachtStud;
    this.inschrijving.internet = this.internetStud;
    this.service.updateLocalInschrijving(this.inschrijving);

    // if (this.service.getBool() == false) {
    //   if (this.inschrijving.rijksregisternummer != null) {
    //     if (this.service.inschrijvingen.some(el => el.rijksregisternummer == this.inschrijving.rijksregisternummer) {

    //       const dialogRef = this.dialog.open(InschrijvingCheckComponent, {
    //         width: '1000px',
    //         height: '800px',
    //         data: { rijksregisternummer: AES.decrypt(this.inschrijving.rijksregisternummer, environment.tmpAESkey).toString(enc.Utf8) }
    //       });
    //     } else {
    //       this.router.navigate(['gegevens_ouders']);
    //     }
    //   } else {
    //     this.router.navigate(['gegevens_ouders']);
    //   }
    // } else {
    //   this.router.navigate(['gegevens_ouders']);
    // }
    this.router.navigate(['gegevens_ouders']);

  }

}
