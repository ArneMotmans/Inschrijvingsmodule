import { FormControl, Validators } from '@angular/forms';
import { Inschrijving } from './../model/inschrijving';
import { InschrijvingService } from './../services/inschrijving.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gegevens-ouders',
  templateUrl: './gegevens-ouders.component.html',
  styleUrls: ['./gegevens-ouders.component.css']
})
export class GegevensOudersComponent implements OnInit {

  //#region Vars
  staten: String[] = ["Onbekend", "Feitelijk gescheiden", "Gescheiden", "Weduwe of weduwnaar", "Gehuwd of wettelijk samenwonend", "Ongehuwd"];
  inschrijving: Inschrijving;

  naamVader = new FormControl('', []);
  voornaamVader = new FormControl('', []);
  beroepVader = new FormControl('', []);
  nationaliteitVader = new FormControl('', [Validators.required]);
  gsmVader = new FormControl('', []);
  emailVader = new FormControl('', [Validators.required]);
  staatVader = new FormControl('', []);
  straatVader = new FormControl('', []);
  nrVader = new FormControl('', []);
  busVader = new FormControl('', []);
  gemeenteVader = new FormControl('', []);

  naamGegVader: string;
  voornaamGegVader: string;
  beroepGegVader: string;
  nationaliteitGegVader: string;
  gsmGegVader: string;
  emailGegVader: string;
  staatGegVader: string;
  straatGegVader: string;
  nrGegVader: string;
  busGegVader: string;
  gemeenteGegVader: string;

  naamMoeder = new FormControl('', []);
  voornaamMoeder = new FormControl('', []);
  beroepMoeder = new FormControl('', []);
  nationaliteitMoeder = new FormControl('', [Validators.required]);
  gsmMoeder = new FormControl('', []);
  emailMoeder = new FormControl('', [Validators.required]);
  staatMoeder = new FormControl('', []);
  straatMoeder = new FormControl('', []);
  nrMoeder = new FormControl('', []);
  busMoeder = new FormControl('', []);
  gemeenteMoeder = new FormControl('', []);

  naamGegMoeder: string;
  voornaamGegMoeder: string;
  beroepGegMoeder: string;
  nationaliteitGegMoeder: string;
  gsmGegMoeder: string;
  emailGegMoeder: string;
  staatGegMoeder: string;
  straatGegMoeder: string;
  nrGegMoeder: string;
  busGegMoeder: string;
  gemeenteGegMoeder: string;
  //endregion

  constructor(private service: InschrijvingService) { }

  ngOnInit() {
    this.inschrijving = this.service.getLocalInschrijving();
    this.naamGegVader = this.inschrijving.vaderNaam;
    this.voornaamGegVader = this.inschrijving.vaderVoornaam;
    this.beroepGegVader = this.inschrijving.vaderBeroep;
    this.nationaliteitGegVader = this.inschrijving.vaderNationaliteit;
    this.gsmGegVader = this.inschrijving.vaderGSM;
    this.emailGegVader = this.inschrijving.vaderEmail;
    this.staatGegVader = this.inschrijving.vaderBurgerlijkestand;
    this.straatGegVader = this.inschrijving.vaderStraat;
    this.nrGegVader = this.inschrijving.vaderNr;
    this.busGegVader = this.inschrijving.vaderBus;
    this.gemeenteGegVader = this.inschrijving.vaderGemeente;
    this.naamGegMoeder = this.inschrijving.moederNaam;
    this.voornaamGegMoeder = this.inschrijving.moederVoornaam;
    this.beroepGegMoeder = this.inschrijving.moederBeroep;
    this.nationaliteitGegMoeder = this.inschrijving.moederNationaliteit;
    this.gsmGegMoeder = this.inschrijving.moederGSM;
    this.emailGegMoeder = this.inschrijving.moederEmail;
    this.staatGegMoeder = this.inschrijving.moederBurgerlijkestand;
    this.straatGegMoeder = this.inschrijving.moederStraat;
    this.nrGegMoeder = this.inschrijving.moederNr;
    this.busGegMoeder = this.inschrijving.moederBus;
    this.gemeenteGegMoeder = this.inschrijving.moederGemeente;
  }

  updateInschrijving() {
    this.inschrijving.moederNaam = this.naamGegMoeder;
    this.inschrijving.vaderNaam = this.naamGegVader;
    this.inschrijving.moederVoornaam = this.voornaamGegMoeder;
    this.inschrijving.vaderVoornaam = this.voornaamGegVader;
    this.inschrijving.moederBeroep = this.beroepGegMoeder;
    this.inschrijving.vaderBeroep = this.beroepGegVader;
    this.inschrijving.moederNationaliteit = this.nationaliteitGegMoeder;
    this.inschrijving.vaderNationaliteit = this.nationaliteitGegVader;
    this.inschrijving.vaderPostcode = this.busGegVader;
    this.inschrijving.moederPostcode = this.busGegMoeder;
    this.inschrijving.moederGSM = this.gsmGegMoeder;
    this.inschrijving.vaderGSM = this.gsmGegVader;
    this.inschrijving.moederEmail = this.emailGegMoeder;
    this.inschrijving.vaderEmail = this.emailGegVader;
    this.inschrijving.moederBurgerlijkestand = this.staatGegMoeder;
    this.inschrijving.vaderBurgerlijkestand = this.staatGegVader;
    this.inschrijving.moederStraat = this.straatGegMoeder;
    this.inschrijving.vaderStraat = this.straatGegVader;
    this.inschrijving.moederNr = this.nrGegMoeder;
    this.inschrijving.vaderNr = this.nrGegVader;
    this.inschrijving.moederBus = this.busGegMoeder;
    this.inschrijving.vaderBus = this.busGegVader;
    this.inschrijving.moederGemeente = this.gemeenteGegMoeder;
    this.inschrijving.vaderGemeente = this.gemeenteGegVader;
    this.service.updateLocalInschrijving(this.inschrijving);
  }

}