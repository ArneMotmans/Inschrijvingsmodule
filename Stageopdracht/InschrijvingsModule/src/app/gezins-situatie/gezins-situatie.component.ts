import { Http, Request } from '@angular/http';
import { InschrijvingService } from './../services/inschrijving.service';
import { Inschrijving } from './../model/inschrijving';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RequestMethod } from '@angular/http/src/enums';

@Component({
  selector: 'app-gezins-situatie',
  templateUrl: './gezins-situatie.component.html',
  styleUrls: ['./gezins-situatie.component.css']
})
export class GezinsSituatieComponent implements OnInit {
  inschrijving: Inschrijving;

  oudersGescheiden = new FormControl('', []);
  oudersCo = new FormControl('', []);
  vaderHoederecht = new FormControl('', []);
  moederHoederecht = new FormControl('', []);
  contactVader = new FormControl('', []);
  contactMoeder = new FormControl('', []);
  onvastVerblijf = new FormControl('', []);
  vaderOverleden = new FormControl('', []);
  moederOverleden = new FormControl('', []);
  broerOverleden = new FormControl('', []);
  zusOverleden = new FormControl('', []);
  ziekFamilielid = new FormControl('', []);
  ondertoezichtOfJeugdinstelling = new FormControl('', []);
  internaat = new FormControl('', []);
  andereOpmerkingen = new FormControl('', []);

  oudersGescheidenGeg: number;
  oudersCoGeg: number;
  vaderHoedderechtGeg: number;
  moederHoedderechtGeg: number;
  contactVaderGeg: number;
  contactMoederGeg: number;
  onvastVerblijfGeg: number;
  vaderOverledenGeg: number;
  moederOverledenGeg: number;
  broerOverledenGeg: number;
  zusOverledenGeg: number;
  ziekFamilielidGeg: number;
  ondertoezichtOfJeugdinstellingGeg: number;
  internaatGeg: number;
  andereOpmerkingenGeg: string;

  naamVoogd = new FormControl('', []);
  voornaamVoogd = new FormControl('', []);
  voogdRelatieTotLeerling = new FormControl('', []);
  instellingVoogd = new FormControl('', []);
  gsmVoogd = new FormControl('', []);
  emailVoogd = new FormControl('', []);
  straatVoogd = new FormControl('', []);
  nrVoogd = new FormControl('', []);
  busVoogd = new FormControl('', []);
  gemeenteVoogd = new FormControl('', []);

  naamVoogdGeg: string;
  voornaamVoogdGeg: string;
  voogdRelatieTotLeerlingGeg: string;
  instellingVoogdGeg: string;
  gsmVoogdGeg: string;
  emailVoogdGeg: string;
  straatVoogdGeg: string;
  nrVoogdGeg: string;
  busVoogdGeg: string;
  gemeenteVoogdGeg: string;


  constructor(private service: InschrijvingService) { }

  ngOnInit() {
    this.inschrijving = new Inschrijving();
    this.inschrijving = this.service.getLocalInschrijving();
    this.oudersGescheidenGeg = this.inschrijving.tsOudersGescheiden;
    this.oudersCoGeg = this.inschrijving.tsCoOuderschap;
    this.vaderHoedderechtGeg = this.inschrijving.tsHoedderechtVader;
    this.moederHoedderechtGeg = this.inschrijving.tsHoedderechtMoeder;
    this.contactVaderGeg = this.inschrijving.tsGeenContactVader;
    this.contactMoederGeg = this.inschrijving.tsGeenContactMoeder;
    this.onvastVerblijfGeg = this.inschrijving.tsZonderVasteVerblijfPlaats;
    this.vaderOverledenGeg = this.inschrijving.tsVaderOverleden;
    this.moederOverledenGeg = this.inschrijving.tsMoederOverleden;
    this.broerOverledenGeg = this.inschrijving.tsBroerOverleden;
    this.zusOverledenGeg = this.inschrijving.tsZusOverleden;
    this.ziekFamilielidGeg = this.inschrijving.tsErnstigZiekFamilieLid;
    this.ondertoezichtOfJeugdinstellingGeg = this.inschrijving.tsOnderToezichtOfJeugdinstelling;
    this.internaatGeg = this.inschrijving.tsInternaatsLeerling;
    this.andereOpmerkingenGeg = this.inschrijving.gAndere;
    this.naamVoogdGeg = this.inschrijving.voNaam;
    this.voornaamVoogdGeg = this.inschrijving.voVoornaam;
    this.voogdRelatieTotLeerlingGeg = this.inschrijving.voRelatieTotLeerling;
    this.instellingVoogdGeg = this.inschrijving.voInstelling;
    this.gsmVoogdGeg = this.inschrijving.voGSM;
    this.emailVoogdGeg = this.inschrijving.voEmail;
    this.straatVoogdGeg = this.inschrijving.voStraat;
    this.nrVoogdGeg = this.inschrijving.voNr;
    this.busVoogdGeg = this.inschrijving.voPostcode;
    this.gemeenteVoogdGeg = this.inschrijving.voGemeente;
  }

  updateInschrijving() {
    this.inschrijving.tsOudersGescheiden = this.oudersGescheidenGeg;
    this.inschrijving.tsCoOuderschap = this.oudersCoGeg;
    this.inschrijving.tsHoedderechtVader = this.vaderHoedderechtGeg;
    this.inschrijving.tsHoedderechtMoeder = this.moederHoedderechtGeg;
    this.inschrijving.tsGeenContactVader = this.contactVaderGeg;
    this.inschrijving.tsGeenContactMoeder = this.contactMoederGeg;
    this.inschrijving.tsZonderVasteVerblijfPlaats = this.onvastVerblijfGeg;
    this.inschrijving.tsVaderOverleden = this.vaderOverledenGeg;
    this.inschrijving.tsMoederOverleden = this.moederOverledenGeg;
    this.inschrijving.tsBroerOverleden = this.broerOverledenGeg;
    this.inschrijving.tsZusOverleden = this.zusOverledenGeg;
    this.inschrijving.tsErnstigZiekFamilieLid = this.ziekFamilielidGeg;
    this.inschrijving.tsOnderToezichtOfJeugdinstelling = this.ondertoezichtOfJeugdinstellingGeg;
    this.inschrijving.tsInternaatsLeerling = this.internaatGeg;
    this.inschrijving.gAndere = this.andereOpmerkingenGeg;
    this.inschrijving.voNaam = this.naamVoogdGeg;
    this.inschrijving.voVoornaam = this.voornaamVoogdGeg;
    this.inschrijving.voRelatieTotLeerling = this.voogdRelatieTotLeerlingGeg;
    this.inschrijving.voInstelling = this.instellingVoogdGeg;
    this.inschrijving.voGSM = this.gsmVoogdGeg;
    this.inschrijving.voEmail = this.emailVoogdGeg;
    this.inschrijving.voStraat = this.straatVoogdGeg;
    this.inschrijving.voNr = this.nrVoogdGeg;
    this.inschrijving.voPostcode = this.busVoogdGeg;
    this.inschrijving.voGemeente = this.gemeenteVoogdGeg;
    
    this.service.updateLocalInschrijving(this.inschrijving);
  }

}
