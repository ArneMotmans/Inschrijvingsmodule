import { environment } from './../../environments/environment.prod';
import { AES } from 'crypto-ts';
import { Inschrijving } from 'src/app/model/inschrijving';
import { Component, OnInit } from '@angular/core';
import { InschrijvingService } from 'src/app/services/inschrijving.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-code-reminder',
  templateUrl: './code-reminder.component.html',
  styleUrls: ['./code-reminder.component.css']
})
export class CodeReminderComponent implements OnInit {

  inschrijving: Inschrijving;
  securityCode: string;

  constructor(private service: InschrijvingService, public dialogRef: MatDialogRef<CodeReminderComponent>) { }

  encrypt(){
    this.inschrijving.leerlingGSM = AES.encrypt(this.inschrijving.leerlingGSM, environment.tmpAESkey).toString();
    this.inschrijving.leerlingTelefoon = AES.encrypt(this.inschrijving.leerlingTelefoon, environment.tmpAESkey).toString();
    this.inschrijving.naam = AES.encrypt(this.inschrijving.naam, environment.tmpAESkey).toString();
    this.inschrijving.rijksregisternummer = AES.encrypt(this.inschrijving.rijksregisternummer, environment.tmpAESkey).toString();
    this.inschrijving.leerlingEmail = AES.encrypt(this.inschrijving.leerlingEmail, environment.tmpAESkey).toString();
  }

  ngOnInit() {
    this.inschrijving = this.service.getLocalInschrijving();
    this.securityCode = this.inschrijving.securityCode;
  }

  closeDialog(){
    this.dialogRef.close();
    this.service.inschrijving = null;
  }

}
