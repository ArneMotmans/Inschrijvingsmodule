import { InschrijvingService } from './../services/inschrijving.service';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Inschrijving } from 'src/app/model/inschrijving';

@Component({
  selector: 'app-schoolloopbaan',
  templateUrl: './schoolloopbaan.component.html',
  styleUrls: ['./schoolloopbaan.component.css']
})
export class SchoolloopbaanComponent implements OnInit {

  jaar: number;

  inschrijving: Inschrijving;

  basisLeerjaar1 = new FormControl('', []);
  basisSchool1 = new FormControl('', []);
  opmerkingen1 = new FormControl('', []);
  basisLeerjaar2 = new FormControl('', []);
  basisSchool2 = new FormControl('', []);
  opmerkingen2 = new FormControl('', []);
  secundairLeerjaar1 = new FormControl('', [Validators.required]);
  secundairSchool1 = new FormControl('', []);
  opmerkingen3 = new FormControl('', [Validators.required]);
  secundairLeerjaar2 = new FormControl('', []);
  secundairSchool2 = new FormControl('', []);
  opmerkingen4 = new FormControl('', []);
  secundairLeerjaar3 = new FormControl('', []);
  secundairSchool3 = new FormControl('', []);
  opmerkingen5 = new FormControl('', []);

  basisLeerjaarGeg1: number;
  basisSchoolGeg1: string;
  opmerkingenGeg1: string;
  basisLeerjaarGeg2: number;
  basisSchoolGeg2: string;
  opmerkingenGeg2: string;
  secundairLeerjaarGeg1: number;
  secundairSchoolGeg1: string;
  opmerkingenGeg3: string;
  secundairLeerjaarGeg2: number;
  secundairSchoolGeg2: string;
  opmerkingenGeg4: string;
  secundairLeerjaarGeg3: number;
  secundairSchoolGeg3: string;
  opmerkingenGeg5: string;

  constructor(private service : InschrijvingService) { }

  ngOnInit() {
    this.jaar = Number.parseInt(this.service.jaar);

    this.inschrijving = this.service.getLocalInschrijving();
    this.basisLeerjaarGeg1 = this.inschrijving.lbojaar1;
    this.basisLeerjaarGeg2 = this.inschrijving.lbojaar2;
    this.basisSchoolGeg1 = this.inschrijving.lboschool1;
    this.basisSchoolGeg2 = this.inschrijving.lboschool2;
    this.opmerkingenGeg1 = this.inschrijving.lbogedubbeld1;
    this.opmerkingenGeg2 = this.inschrijving.lbogedubbeld2;
    this.secundairLeerjaarGeg1 = this.inschrijving.lsojaar1;
    this.secundairLeerjaarGeg2 = this.inschrijving.lsojaar2;
    this.secundairLeerjaarGeg3 = this.inschrijving.lsojaar3;
    this.secundairSchoolGeg1 = this.inschrijving.lsoschool1;
    this.secundairSchoolGeg2 = this.inschrijving.lsoschool2;
    this.secundairSchoolGeg3 = this.inschrijving.lsoschool3;
    this.opmerkingenGeg3 = this.inschrijving.lsoattestAdvies1;
    this.opmerkingenGeg4 = this.inschrijving.lsoattestAdvies2;
    this.opmerkingenGeg5 = this.inschrijving.lsoattestAdvies3;

    console.log("Husiarts:  " + this.inschrijving.niHuisArts + " " + this.inschrijving.niHuisArtsStraat + " " + this.inschrijving.niHuisArtsTelefoon);
  }

  updateInschrijving(){
    this.inschrijving.lbojaar1 = this.basisLeerjaarGeg1;
    this.inschrijving.lboschool1 = this.basisSchoolGeg1;
    this.inschrijving.lbogedubbeld1 = this.opmerkingenGeg1;
    this.inschrijving.lbojaar2 = this.basisLeerjaarGeg2;
    this.inschrijving.lboschool2 = this.basisSchoolGeg2;
    this.inschrijving.lbogedubbeld2 = this.opmerkingenGeg2;
    this.inschrijving.lsojaar1 = this.secundairLeerjaarGeg1;
    this.inschrijving.lsoschool1 = this.secundairSchoolGeg1;
    this.inschrijving.lsoattestAdvies1 = this.opmerkingenGeg3;
    this.inschrijving.lsojaar2 = this.secundairLeerjaarGeg2;
    this.inschrijving.lsoschool2 = this.secundairSchoolGeg2;
    this.inschrijving.lsoattestAdvies2 = this.opmerkingenGeg4;
    this.inschrijving.lsojaar3 = this.secundairLeerjaarGeg3;
    this.inschrijving.lsoschool3 = this.secundairSchoolGeg3;
    this.inschrijving.lsoattestAdvies3 = this.opmerkingenGeg5;

    this.service.updateLocalInschrijving(this.inschrijving);
  }

}
