import { environment } from './../../environments/environment.prod';
import { AES, enc } from 'crypto-ts';
import { Router } from '@angular/router';
import { Inschrijving } from './../model/inschrijving';
import { InschrijvingService } from './../services/inschrijving.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

export interface DuplicateData {
  naam: string;
  voornaam: string;
  rijksregisternummer: string;
}

@Component({
  selector: 'app-inschrijving-check',
  templateUrl: './inschrijving-check.component.html',
  styleUrls: ['./inschrijving-check.component.css']
})
export class InschrijvingCheckComponent implements OnInit {

  inschrijvingen = [];
  displayedColumns: string[] = ['naam', 'voornaam', 'rijksregisternummer', 'studierichting', 'check'];
  neededBool: boolean;

  constructor(private router: Router, private service: InschrijvingService, public dialogRef : MatDialogRef<InschrijvingCheckComponent>, @Inject(MAT_DIALOG_DATA) public data: DuplicateData) { }

  ngOnInit() {
    if(this.data.rijksregisternummer == null){
      this.service.inschrijvingen.forEach(el => {
        if(AES.decrypt(el.naam, environment.tmpAESkey).toString(enc.Utf8) == this.data.naam && el.voornaam == this.data.voornaam){
          if(el.rijksregisternummer != null){
            el.rijksregisternummer = AES.decrypt(el.rijksregisternummer, environment.tmpAESkey).toString(enc.Utf8);
          }
          el.naam = AES.decrypt(el.naam, environment.tmpAESkey).toString(enc.Utf8);
          this.inschrijvingen.push(el);
        }
      });
      this.neededBool = false;
    } else {
      this.service.inschrijvingen.forEach(el => {
        if(el.rijksregisternummer != null){
        console.log("Dit is de vrotte rijksregisternummer:  " + el.rijksregisternummer + "    DEcrypted:  " + AES.decrypt(el.rijksregisternummer, environment.tmpAESkey).toString(enc.Utf8) + "    The sent data:  " + this.data.rijksregisternummer);
        
        if(AES.decrypt(el.rijksregisternummer, environment.tmpAESkey).toString(enc.Utf8) == this.data.rijksregisternummer){
          
          el.naam = AES.decrypt(el.naam, environment.tmpAESkey).toString(enc.Utf8);
          el.rijksregisternummer = AES.decrypt(el.rijksregisternummer, environment.tmpAESkey).toString(enc.Utf8);
          this.inschrijvingen.push(el);
        }
      }
      });
      this.neededBool = true;
    }
    
  }

  closeDialog(){
    this.dialogRef.close();
    this.inschrijvingen = null;

    if(this.data.rijksregisternummer == null) {
      this.router.navigate(['algemene_gegevens'])
    } else {
      if(this.neededBool == true){
        this.router.navigate(['algemene_gegevens'])
      } else {
      this.router.navigate(['gegevens_ouders']);
      }
    }
  }

  checkInschrijving(inschrijving: Inschrijving){
    this.service.setChecked();
    this.service.updateLocalInschrijving(inschrijving);
    this.dialogRef.close();

    if(this.data.rijksregisternummer == null) {
      this.router.navigate(['algemene_gegevens']);
    } else {
      if(this.neededBool == true){
        this.router.navigate(['algemene_gegevens'])
      } else {
      this.router.navigate(['gegevens_ouders']);
      }
    }
  }
}
