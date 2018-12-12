import { LoginComponent } from './login/login.component';
import { BijkomendeInfoLangComponent } from './bijkomende-info-lang/bijkomende-info-lang.component';
import { BijkomendeInfoKortComponent } from './bijkomende-info-kort/bijkomende-info-kort.component';
import { InlichtingenComponent } from './inlichtingen/inlichtingen.component';
import { GezinsSituatieComponent } from './gezins-situatie/gezins-situatie.component';
import { GegevensOudersComponent } from './gegevens-ouders/gegevens-ouders.component';
import { GegevensLeerlingComponent } from './gegevens-leerling/gegevens-leerling.component';
import {Routes} from '@angular/router';  
import { InschrijvingsAanzetComponent } from 'src/app/inschrijvings-aanzet/inschrijvings-aanzet.component';
import { NuttigeInformatieComponent } from 'src/app/nuttige-informatie/nuttige-informatie.component';
import { SchoolloopbaanComponent } from 'src/app/schoolloopbaan/schoolloopbaan.component';

export const appRoutes: Routes = [ 
    { path: '', component: LoginComponent },
    { path: 'aanzet', component: InschrijvingsAanzetComponent},
    { path: 'algemene_gegevens', component: GegevensLeerlingComponent},
    { path: 'gegevens_ouders', component: GegevensOudersComponent},
    { path: 'gezins-situatie', component: GezinsSituatieComponent},
    { path: 'nuttige_informatie', component: NuttigeInformatieComponent},
    { path: 'schoolloopbaan', component: SchoolloopbaanComponent},
    { path: 'inlichtingen', component: InlichtingenComponent},
    { path: 'bijkomende-info-kort', component: BijkomendeInfoKortComponent},
    { path: 'bijkomende-info-lang', component: BijkomendeInfoLangComponent}
    
];