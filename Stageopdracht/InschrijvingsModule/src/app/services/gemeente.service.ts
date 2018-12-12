import { Gemeente } from './../model/gemeente';
import { map } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from 'rxjs';
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class GemeenteService {

    constructor(private http: Http) { }

    getAllGemeentes() {
        return this.http.get('http://localhost:8080/api/getGemeentes');

    }
}