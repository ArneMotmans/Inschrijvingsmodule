import { OidcSecurityService, OpenIDImplicitFlowConfiguration, AuthWellKnownEndpoints, AuthorizationResult } from 'angular-auth-oidc-client';
import { Http } from '@angular/http';
import { AuthService } from './../services/auth.service';
import { InschrijvingService } from './../services/inschrijving.service';
import { OAuthService, AuthConfig, JwksValidationHandler } from 'angular-oauth2-oidc';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  constructor(private service: InschrijvingService, private authService: AuthService, private http: Http, private oauthService: OAuthService, private oidcSecurityService: OidcSecurityService) {
    
  }

  ngOnInit() {
    // this.authService.startAuth();
    
  }

  startVoorlopigeInschrijving() {
    this.service.setBool();
  }

  login() {
    this.authService.startLoginProcedure();
    
  }

}
