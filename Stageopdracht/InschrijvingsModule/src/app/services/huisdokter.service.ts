import { map } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from 'rxjs';

@Injectable()
export class HuisdokterService {

    constructor(private http: Http) { }

    getAllHuisdokters() {
        return this.http.get('http://localhost:8080/api/getDokters');
    }
}