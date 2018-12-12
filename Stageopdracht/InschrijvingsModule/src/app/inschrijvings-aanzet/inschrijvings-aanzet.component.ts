import { environment } from './../../environments/environment.prod';
import { Headers, RequestOptions, RequestMethod } from '@angular/http';
import { GegevensLeerlingComponent } from './../gegevens-leerling/gegevens-leerling.component';
import { InschrijvingCheckComponent } from './../inschrijving-check/inschrijving-check.component';
import { CodeReminderComponent } from './../code-reminder/code-reminder.component';
import { AuthService } from './../services/auth.service';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Http } from '@angular/http';
import { InschrijvingService } from './../services/inschrijving.service';
import { Inschrijving } from './../model/inschrijving';
import { Studierichting } from './../model/studierichting';
import { Observable } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { startWith, map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpHeaders } from '@angular/common/http';
import { Provider, Request } from '@zalando/oauth2-client-js';
import { AES, enc } from 'crypto-ts';
import { Strategy } from 'passport-saml';

@Component({
  selector: 'app-inschrijvings-aanzet',
  templateUrl: './inschrijvings-aanzet.component.html',
  styleUrls: ['./inschrijvings-aanzet.component.css']
})
export class InschrijvingsAanzetComponent implements OnInit {


  studierichtingenCtrl = new FormControl('', [Validators.required]);
  keuzevakCtrl = new FormControl('', []);
  // form: FormGroup;
  naam = new FormControl('', [Validators.required]);
  voornaam = new FormControl('', [Validators.required]);
  geboorteDatum = new FormControl('', [Validators.required]);
  // studierichting = new FormControl('', [Validators.required]);

  filteredStudierichtingen: Observable<Studierichting[]>;
  inschrijving: Inschrijving;
  naamStud: string;
  voornaamStud: string;
  geboorteDatumStud: Date;
  keuzevakStud: string;

  studieRichtingStud: string = "";
  completeSpinner: string = "determinate";
  testInschrijving: Inschrijving;
  studierichtingen: Studierichting[] = [
    { naam: '1A (Aanvulling hoofdvakken)' },
    { naam: '1A (Aanvulling hoofdvakken/handel/voeding/sociale-en-technische-vorming)' },
    { naam: '1A (Aanvulling hoofdvakken/technologische-activiteiten)' },
    { naam: '1A (Aanvulling latijn)' },
    { naam: '1A (Aanvulling STEM)' },
    { naam: '1B (Aanvulling techniek)' },
    { naam: '1B (Aanvulling voeding)' },
    { naam: '2A (Grieks-Latijn)' },
    { naam: '2A (Handel)' },
    { naam: '2A (Hotel-voeding)' },
    { naam: '2A (Industriële wetenschappen)' },
    { naam: '2A (Latijn)' },
    { naam: '2A (Mechanica-elektriciteit)' },
    { naam: '2A (Moderne Wetenschappen)' },
    { naam: '2A (Sociale en technische vorming)' },
    { naam: '2B (Hotel-bakkerij-slagerij' },
    { naam: '2B (Kantoor en verkoop)' },
    { naam: '2B (Nijverheid)' },
    { naam: '2B (Verzorging-voeding)' },
    { naam: '3 (Basismechanica BSO)' },
    { naam: '3 (Brood- en banketbakkerij BSO)' },
    { naam: '3 (Economie A ASO)' },
    { naam: '3 (Economie B ASO)' },
    { naam: '3 (Elektromechanica TSO)' },
    { naam: '3 (Elektrotechnieken TSO)' },
    { naam: '3 (Grieks-latijn A ASO)' },
    { naam: '3 (Grieks-latijn B ASO)' },
    { naam: '3 (Handel TSO)' },
    { naam: '3 (Handel-talen TSO)' },
    { naam: '3 (Hotel TSO)' },
    { naam: '3 (Humane wetenschappen A ASO)' },
    { naam: '3 (Humane wetenschappen B ASO)' },
    { naam: '3 (Industriële wetenschappen TSO)' },
    { naam: '3 (Kantoor BSO)' },
    { naam: '3 (Latijn ASO)' },
    { naam: '3 (Mechanische technieken TSO)' },
    { naam: '3 (Restaurant en keuken BSO)' },
    { naam: '3 (Sociale en technische wetenschappen TSO' },
    { naam: '3 (Toerisme TSO)' },
    { naam: '3 (Verzorging-voeding BSO)' },
    { naam: '3 (Wetenschappen ASO)' },
    { naam: '4 (Basismechanica BSO)' },
    { naam: '4 (Brood- en banketbakkerijk BSO)' },
    { naam: '4 (Economie A ASO)' },
    { naam: '4 (Economie B ASO)' },
    { naam: '4 (Elektromechanica TSO)' },
    { naam: '4 (Elektrotechnieken TSO)' },
    { naam: '4 (Grieks-latijn A ASO)' },
    { naam: '4 (Grieks-latijn B ASO)' },
    { naam: '4 (Handel TSO)' },
    { naam: '4 (Handel-talen TSO)' },
    { naam: '4 (Hotel TSO)' },
    { naam: '4 (Humane wetenschappen A ASO)' },
    { naam: '4 (Humane wetenschappen B ASO)' },
    { naam: '4 (Industriële wetenschappen TSO)' },
    { naam: '4 (Kantoor BSO)' },
    { naam: '4 (Latijn ASO)' },
    { naam: '4 (Mechanische technieken TSO)' },
    { naam: '4 (Restaurant en keuken BSO)' },
    { naam: '4 (Sociale en technische wetenschappen TSO' },
    { naam: '4 (Toerisme TSO)' },
    { naam: '4 (Verzorging-voeding BSO)' },
    { naam: '4 (Wetenschappen ASO)' },
    { naam: '5 (Auto BSO)' },
    { naam: '5 (Brood- en banketbakkerij en confiserie BSO)' },
    { naam: '5 (Centrale verwarming en sanitaire installaties BSO)' },
    { naam: '5 (Economie moderne talen ASO)' },
    { naam: '5 (Economie Wiskunde ASO)' },
    { naam: '5 (Elektrische installatietechnieken TSO)' },
    { naam: '5 (Elektromechanica TSO)' },
    { naam: '5 (Grieks - wiskunde ASO)' },
    { naam: '5 (Handel TSO)' },
    { naam: '5 (Hotel TSO)' },
    { naam: '5 (Humane wetenschappen A ASO)' },
    { naam: '5 (Humane Wetenschappen B ASO)' },
    { naam: '5 (Industriële wetenschappen TSO)' },
    { naam: '5 (Kantoor BSO)' },
    { naam: '5 (Lassen - constructie BSO)' },
    { naam: '5 (Latijn moderne talen ASO)' },
    { naam: '5 (Latijn wetenschappen ASO)' },
    { naam: '5 (Latijn wiskunde ASO)' },
    { naam: '5 (Mechanische vormgevingstechnieken TSO)' },
    { naam: '5 (Moderne talen wetenschappen ASO)' },
    { naam: '5 (Restaurant en keuken BSO)' },
    { naam: '5 (Secretariaat talen TSO)' },
    { naam: '5 (Sociale en technische wetenschappen TSO)' },
    { naam: '5 (Toerisme TSO)' },
    { naam: '5 (Verzorging BSO)' },
    { naam: '5 (Wetenschappen - wiskunde A ASO)' },
    { naam: '5 (Wetenschappen - wiskunde B ASO)' },
    { naam: '6 (Auto BSO)' },
    { naam: '6 (Brood- en banketbakkerij en confiserie BSO)' },
    { naam: '6 (Centrale verwarming en sanitaire installaties BSO)' },
    { naam: '6 (Economie moderne talen ASO)' },
    { naam: '6 (Economie Wiskunde ASO)' },
    { naam: '6 (Elektrische installatietechnieken TSO)' },
    { naam: '6 (Elektromechanica TSO)' },
    { naam: '6 (Grieks - wiskunde ASO)' },
    { naam: '6 (Handel TSO)' },
    { naam: '6 (Hotel TSO)' },
    { naam: '6 (Humane wetenschappen A ASO)' },
    { naam: '6 (Humane Wetenschappen B ASO)' },
    { naam: '6 (Industriële wetenschappen TSO)' },
    { naam: '6 (Kantoor BSO)' },
    { naam: '6 (Lassen - constructie BSO)' },
    { naam: '6 (Latijn moderne talen ASO)' },
    { naam: '6 (Latijn wetenschappen ASO)' },
    { naam: '6 (Latijn wiskunde ASO)' },
    { naam: '6 (Mechanische vormgevingstechnieken TSO)' },
    { naam: '6 (Moderne talen wetenschappen ASO)' },
    { naam: '6 (Restaurant en keuken BSO)' },
    { naam: '6 (Secretariaat talen TSO)' },
    { naam: '6 (Sociale en technische wetenschappen TSO)' },
    { naam: '6 (Toerisme TSO)' },
    { naam: '6 (Verzorging BSO)' },
    { naam: '6 (Wetenschappen - wiskunde ASO)' },
    { naam: '7 (Auto-elektriciteit of Carrosserie + spuitwerk BSO)' },
    { naam: '7 (Banketbakkerij - chocoladebewerking BSO)' },
    { naam: '7 (Industriële onderhoudstechnieken Se-n-Se TSO)' },
    { naam: '7 (Kantooradministratie en gegevensbeheer BSO)' },
    { naam: '7 (Kinderzorg of Thuis- en bejaardenzorg BSO)' },
    { naam: '7 (Pijpfitten - lassen - monteren BSO)' },
    { naam: '7 (Specialiteitenrestaurant BSO)' },
    { naam: '7 (Verwarmingsinstallaties BSO)' }
  ];
  idToSearch: number;
  code: string;
  bool: boolean;
  
  keuzevakken: string[] = [];
  filteredKeuzeVakken: Observable<string[]>;

  ngOnInit() {
    this.inschrijving = new Inschrijving();
    this.bool = this.service.getBool();

    // setTimeout(() => {
    //   this.http.get('http://localhost:3000/read').subscribe(data => console.log("This is the card data:  " + data.json()));
    // }, 5000);
  }

  checkStudieRichting() {
    if (this.studieRichtingStud != null) {
      if (this.studieRichtingStud == "") {
        return false;
      } else if (this.studieRichtingStud.indexOf("1A") + 1 ||
        this.studieRichtingStud.indexOf("1B") + 1 ||
        this.studieRichtingStud.indexOf("2A") + 1 ||
        this.studieRichtingStud.indexOf("2B") + 1 ||
        this.studieRichtingStud.indexOf("3") + 1) {
          this.keuzevakCtrl.validator = Validators.required;
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  updateKeuzeVakken(richting: string) {
    this.studieRichtingStud = "";
    this.keuzevakStud = null;
    this.keuzevakken = null;

    if (richting.indexOf("1A") + 1) {
      this.keuzevakken = ["Vak1", "Vak2", "Vak3"];
      this.filteredKeuzeVakken = this.keuzevakCtrl.valueChanges
        .pipe(
        startWith(''),
        map(value => this._filter(value))
        );
      console.log(this.keuzevakken);
    } else if (richting.indexOf("1B") + 1) {
      this.keuzevakken = ["Bijvak1", "Bijvak2", "Bijvak3"];
      this.filteredKeuzeVakken = this.keuzevakCtrl.valueChanges
        .pipe(
        startWith(''),
        map(value => this._filter(value))
        );
      console.log(this.keuzevakken);
    } else if (richting.indexOf("2A") + 1) {
      this.keuzevakken = ["Test1", "Test2", "Test3"];
      this.filteredKeuzeVakken = this.keuzevakCtrl.valueChanges
        .pipe(
        startWith(''),
        map(value => this._filter(value))
        );
      console.log(this.keuzevakken);
    } else if (richting.indexOf("2B") + 1) {
      this.keuzevakken = ["Lol1", "Lol2", "Lol3"];
      this.filteredKeuzeVakken = this.keuzevakCtrl.valueChanges
        .pipe(
        startWith(''),
        map(value => this._filter(value))
        );
      console.log(this.keuzevakken);
    } else if (richting.indexOf("3") + 1) {
      this.keuzevakken = ["Voorbeeld1", "Voorbeeld2", "Voorbeeld3"];
      this.filteredKeuzeVakken = this.keuzevakCtrl.valueChanges
        .pipe(
        startWith(''),
        map(value => this._filter(value))
        );
      console.log(this.keuzevakken);
    }
  }

  constructor(private service: InschrijvingService, private router: Router, public dialog: MatDialog, private http: Http, private route: ActivatedRoute) {
    console.log(this.service.inschrijvingen);

    console.log("This is the code:   " + this.router.url.slice(this.router.url.indexOf('=') + 1, this.router.url.indexOf('&')));
    this.code = this.router.url.slice(this.router.url.indexOf('=') + 1, this.router.url.indexOf('&'));

    this.filteredStudierichtingen = this.studierichtingenCtrl.valueChanges
      .pipe(
      startWith(''),
      map(value => this._filterRichtingen(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.keuzevakken.filter(keuzevak => keuzevak.toLowerCase().includes(filterValue));
  }

  getTempInschrijving() {
    this.http.get("http://localhost:8080/api/getByCode/" + this.idToSearch).subscribe(res => this.service.updateLocalInschrijving(res.json()));
    console.log("Test");
    setTimeout(() => {
      this.inschrijving = this.service.getLocalInschrijving();
      this.inschrijving.naam = AES.decrypt(this.inschrijving.naam, environment.tmpAESkey).toString(enc.Utf8);
      this.naamStud = this.inschrijving.naam;
      this.voornaamStud = this.inschrijving.voornaam;


      var tempDate = this.inschrijving.geboorteDatum.toString().split('T');
      this.geboorteDatumStud = new Date(tempDate[0]);
      this.studieRichtingStud = this.inschrijving.studieRichting;
    }, 1000);

  }

  private _filterRichtingen(value: string): Studierichting[] {
    const filterValue = value.toLowerCase();

    return this.studierichtingen.filter(richting => richting.naam.toLowerCase().includes(filterValue));
  }

  addValuesToObject() {
    this.service.jaar = this.studieRichtingStud.charAt(0);

    this.inschrijving.naam = this.naamStud;
    this.inschrijving.voornaam = this.voornaamStud;
    this.inschrijving.geboorteDatum = this.geboorteDatumStud;
    this.inschrijving.studieRichting = this.studieRichtingStud;
    this.inschrijving.keuzevak = this.keuzevakStud;

    this.service.updateLocalInschrijving(this.inschrijving);

    if (this.service.getBool() == false) {
      if (this.service.inschrijvingen.some(el => AES.decrypt(el.naam, environment.tmpAESkey).toString(enc.Utf8) == this.inschrijving.naam) && this.service.inschrijvingen.some(el => el.voornaam == this.inschrijving.voornaam)) {
        if (this.inschrijving.rijksregisternummer == null) {
          const dialogRef = this.dialog.open(InschrijvingCheckComponent, {
            width: '1000px',
            height: '800px',
            data: { naam: this.inschrijving.naam, voornaam: this.inschrijving.voornaam, rijksregisternummer: null }
          });
        } else {
          const dialogRef = this.dialog.open(InschrijvingCheckComponent, {
            width: '1000px',
            height: '800px',
            data: { naam: this.inschrijving.naam, voornaam: this.inschrijving.voornaam, rijksregisternummer: AES.decrypt(this.inschrijving.rijksregisternummer, environment.tmpAESkey).toString(enc.Utf8) }
          });
        }

      } else {
        this.router.navigate(['algemene_gegevens']);
      }
    } else {
      this.router.navigate(["algemene_gegevens"]);
    }


  }

  loadIDCardData() {
    this.completeSpinner = "indeterminate";

    this.service.getDataFromBackend().subscribe(res => {
      console.log('ID Data', res.json());

      var data = JSON.stringify(res.json());
      var obj = JSON.parse(data);
      console.log('Test retieving field data', obj);

      this.naamStud = obj.name;

      var tempNamen = obj.firstNameOne.split(" ");
      this.voornaamStud = tempNamen[0];

      var birthDateTemp = new Date(obj.birthDate);
      this.geboorteDatumStud = birthDateTemp;

      this.inschrijving.geboorteplaats = obj.birthPlace;
      this.inschrijving.nationaliteit = obj.nationality;
      this.inschrijving.geslacht = obj.sex;
      this.inschrijving.leerlingGemeente = obj.municipality;
      this.inschrijving.rijksregisternummer = obj.nationalNumber;
      this.inschrijving.foto = obj.image;
      this.service.updateLocalInschrijving(this.inschrijving);
      this.completeSpinner = "determinate";

    });
  }
}
