import { HuisdokterService } from './services/huisdokter.service';
import { Headers } from '@angular/http/src/headers';
import { InschrijvingService } from './services/inschrijving.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { InschrijvingsAanzetComponent } from './inschrijvings-aanzet/inschrijvings-aanzet.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/app/app.routes';
import { GegevensLeerlingComponent } from './gegevens-leerling/gegevens-leerling.component';
import { MatRadioModule } from '@angular/material/radio';
import { GegevensOudersComponent } from './gegevens-ouders/gegevens-ouders.component';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { GezinsSituatieComponent } from './gezins-situatie/gezins-situatie.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { NuttigeInformatieComponent } from './nuttige-informatie/nuttige-informatie.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { SchoolloopbaanComponent } from './schoolloopbaan/schoolloopbaan.component';
import { InlichtingenComponent } from './inlichtingen/inlichtingen.component';
import { BijkomendeInfoKortComponent } from './bijkomende-info-kort/bijkomende-info-kort.component';
import { BijkomendeInfoLangComponent } from './bijkomende-info-lang/bijkomende-info-lang.component';
import { GemeenteService } from 'src/app/services/gemeente.service';
import { LoginComponent } from './login/login.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { CodeReminderComponent } from './code-reminder/code-reminder.component';
import { AuthService } from 'src/app/services/auth.service';
import { AuthModule, OidcSecurityService, OpenIDImplicitFlowConfiguration, AuthConfiguration, OidcConfigService, AuthWellKnownEndpoints} from 'angular-auth-oidc-client';
import { InschrijvingCheckComponent } from './inschrijving-check/inschrijving-check.component';
import {MatTableModule} from '@angular/material/table';
import { APP_INITIALIZER } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    InschrijvingsAanzetComponent,
    GegevensLeerlingComponent,
    GegevensOudersComponent,
    GezinsSituatieComponent,
    NuttigeInformatieComponent,
    SchoolloopbaanComponent,
    InlichtingenComponent,
    BijkomendeInfoKortComponent,
    BijkomendeInfoLangComponent,
    LoginComponent,
    CodeReminderComponent,
    InschrijvingCheckComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatExpansionModule,
    RouterModule.forRoot(appRoutes),
    MatRadioModule,
    HttpModule,
    MatCheckboxModule,
    HttpClientModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    AuthModule.forRoot(),
    OAuthModule.forRoot(),
    MatTableModule
  ],
  providers: [InschrijvingService, GemeenteService, AuthService, OidcSecurityService, AuthConfiguration, OidcConfigService, HuisdokterService],
  bootstrap: [AppComponent],
  entryComponents: [CodeReminderComponent, InschrijvingCheckComponent]
})
export class AppModule { 
  
}
