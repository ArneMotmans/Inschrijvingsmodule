import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";



@Injectable()
export class AuthService {

  constructor(private http: Http) {

  }

  startAuth() {

  }

  startLoginProcedure() {
    window.location.href = 'https://st-martinus.smartschool.be/OAuth?response_type=code&client_id=901c09e9251b&redirect_uri=http://alfacube.eu/aanzet&scope=userInfo+fulluserInfo+groupInfo&state=25z49z5a6';
  }

  logout() {
  }

}