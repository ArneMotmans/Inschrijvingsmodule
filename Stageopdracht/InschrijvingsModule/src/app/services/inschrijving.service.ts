import { Headers } from '@angular/http/src/headers';
// import { map } from 'rxjs/operators';
import { Http, Response, Request, RequestMethod, RequestOptions } from '@angular/http';
import { Inschrijving } from './../model/inschrijving';
import { Injectable, Injector } from "@angular/core";
import { map } from 'rxjs/operators';

// const APIURL = 'http://localhost:3000/api/inschrijvingen';

@Injectable()
export class InschrijvingService {
    inschrijving: Inschrijving;
    voorlopig: boolean = false;
    inschrijvingen = [];
    jaar: string;
    checked: boolean = false;

    constructor(private http: Http) {
        this.inschrijving = new Inschrijving();

        this.getAllInschrijvingen().subscribe(res => {
            res.json().forEach(element => {
              var inschrijving = new Inschrijving();
              inschrijving = element;
      
              this.inschrijvingen.push(inschrijving);
            });
          });
     }

    updateLocalInschrijving(inschrijving: Inschrijving) { 
        this.inschrijving = inschrijving;
    }

    getAllInschrijvingen() {
        return this.http.get('http://localhost:8080/api/getInschrijvingen');

    }

    getLocalInschrijving() { 
        return this.inschrijving;
    }

    getDataFromBackend(){
        return this.http.get('http://localhost:8080/api/card');
    }

    setBool(){
        this.voorlopig = true;
    }

    setChecked(){
        this.checked = true;
    }

    getChecked(){
        return this.checked;
    }

    getBool(){
        return this.voorlopig;
    }

   
}