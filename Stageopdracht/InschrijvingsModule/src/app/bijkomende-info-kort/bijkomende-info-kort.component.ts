import { Inschrijving } from './../model/inschrijving';
import { InschrijvingService } from './../services/inschrijving.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bijkomende-info-kort',
  templateUrl: './bijkomende-info-kort.component.html',
  styleUrls: ['./bijkomende-info-kort.component.css']
})
export class BijkomendeInfoKortComponent implements OnInit {

  inschijving: Inschrijving;

  bijkomendSterkePunten = new FormControl('', []);
  bijkomendSport = new FormControl('', []);
  competitieSport = new FormControl('', []);

  bijkomendSterkePuntenGeg : string;
  bijkomendSportGeg : string;
  competitieSportGeg : string;

  constructor( private service: InschrijvingService) { }

  ngOnInit() {
    this.inschijving = this.service.getLocalInschrijving();
    this.bijkomendSterkePuntenGeg = this.inschijving.bisterkePunten;
    this.bijkomendSportGeg = this.inschijving.bicompetitiesportInfo;
    this.competitieSportGeg = this.inschijving.bicompetitiesport;
  }

  updateInschrijving(){
    this.inschijving.bisterkePunten = this.bijkomendSterkePuntenGeg;
    this.inschijving.bicompetitiesportInfo = this.bijkomendSportGeg;
    this.inschijving.bicompetitiesport = this.competitieSportGeg;

    this.service.updateLocalInschrijving(this.inschijving);
    console.log("Is the value transmitted?" + this.inschijving.bicompetitiesportInfo);
  }

}
