import { Huisdokter } from './../model/huisdokter';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HuisdokterService } from './../services/huisdokter.service';
import { Inschrijving } from './../model/inschrijving';
import { InschrijvingService } from './../services/inschrijving.service';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuttige-informatie',
  templateUrl: './nuttige-informatie.component.html',
  styleUrls: ['./nuttige-informatie.component.css']
})
export class NuttigeInformatieComponent implements OnInit {

  inschrijving: Inschrijving;
  huisdokters: Huisdokter[] = [];
  huisdokter: Huisdokter;

  aantalBroers = new FormControl('', []);
  aantalZussen = new FormControl('', []);
  leerlingHoeveelste = new FormControl('', []);
  reedsOpSchool = new FormControl('', []);
  huisdokterNaam = new FormControl('', []);
  communicatieOuders = new FormControl('', []);
  communicatieMiddelOuders = new FormControl('', []);
  gemotiveerdVerslag = new FormControl('', []);
  verslag = new FormControl('', []);
  ouderMeerwaarde = new FormControl('', []);
  meerwaardeUitleg = new FormControl('', []);

  aantalBroersGeg: number;
  aantalZussenGeg: number; Validators
  leerlingHoeveelsteGeg: number;
  reedsOpSchoolGeg: string;
  huisdokterNaamGeg: string;
  communicatieOudersGeg: string;
  communicatieMiddelOudersGeg: string;
  gemotiveerdVerslagGeg: number;
  verslagGeg: number;
  ouderMeerwaardeGeg: boolean;
  meerwaardeUitlegGeg: string;
  filteredHuisdokters: Observable<Huisdokter[]>;

  constructor(private service: InschrijvingService, private huisdokterService: HuisdokterService) { 
    this.huisdokterService.getAllHuisdokters().subscribe(el => {
      el.json().forEach(element => {
        var dokter = new Huisdokter();
        dokter = element;

        this.huisdokters.push(dokter);
      });
    })
  }

  ngOnInit() {
    this.filteredHuisdokters = this.huisdokterNaam.valueChanges
      .pipe(
      startWith(''),
      map(value => this._filterGemeente(value))
      );

    this.inschrijving = new Inschrijving();
    this.inschrijving = this.service.getLocalInschrijving();
    this.aantalBroersGeg = this.inschrijving.gBroers;
    this.aantalZussenGeg = this.inschrijving.gZussen;
    this.leerlingHoeveelsteGeg = this.inschrijving.gHoeveelste;
    this.reedsOpSchoolGeg = this.inschrijving.gBroerZusOpSchool;
    this.huisdokterNaamGeg = this.inschrijving.niHuisArts;
    this.communicatieOudersGeg = this.inschrijving.niCommunicatieOudersRechtstreeks;
    this.communicatieMiddelOudersGeg = this.inschrijving.niCommunicatieOudersVia;
    this.gemotiveerdVerslagGeg = this.inschrijving.niGemotiveerdVerslag;
    this.verslagGeg = this.inschrijving.niVerslag;
    this.ouderMeerwaardeGeg = this.inschrijving.niMeerwaardeOuders;
    this.meerwaardeUitlegGeg = this.inschrijving.niMeerwaardeUitleg;
  }

  private _filterGemeente(value: string): Huisdokter[] {
    const filterValue = value.toLowerCase();

    return this.huisdokters.filter(huisdokter => huisdokter.naam.toLowerCase().includes(filterValue));
  }

  addValuesToObject(){
    this.inschrijving.gBroers = this.aantalBroersGeg;
    this.inschrijving.gZussen = this.aantalZussenGeg;
    this.inschrijving.gHoeveelste = this.leerlingHoeveelsteGeg;
    this.inschrijving.gBroerZusOpSchool = this.reedsOpSchoolGeg;
    this.inschrijving.niHuisArts = this.huisdokterNaamGeg;
    this.inschrijving.niCommunicatieOudersRechtstreeks = this.communicatieOudersGeg;
    this.inschrijving.niCommunicatieOudersVia = this.communicatieMiddelOudersGeg;
    this.inschrijving.niGemotiveerdVerslag = this.gemotiveerdVerslagGeg;
    this.inschrijving.niVerslag = this.verslagGeg;
    this.inschrijving.niMeerwaardeOuders = this.ouderMeerwaardeGeg;
    this.inschrijving.niMeerwaardeUitleg = this.meerwaardeUitlegGeg;

    this.huisdokter = new Huisdokter();
    this.huisdokter = this.huisdokters.find(e => e.naam == this.huisdokterNaamGeg);
    if(this.huisdokter != null){
      this.inschrijving.niHuisArtsStraat = this.huisdokter.straat;
      this.inschrijving.niHuisArtsTelefoon = this.huisdokter.telefoon;
    }
    
    this.service.updateLocalInschrijving(this.inschrijving);
  }

}
