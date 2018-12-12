import { Inschrijving } from 'src/app/model/inschrijving';
import { InschrijvingService } from './../services/inschrijving.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inlichtingen',
  templateUrl: './inlichtingen.component.html',
  styleUrls: ['./inlichtingen.component.css']
})
export class InlichtingenComponent implements OnInit {
  
  inschrijving: Inschrijving;

  ADD = new FormControl('', []);
  ADHD = new FormControl('', []);
  ASS = new FormControl('', []);
  Fobieen = new FormControl('', []);
  GillesDeLaTourette = new FormControl('', []);
  Concentratie = new FormControl('', []);
  NLD = new FormControl('', []);
  andereOntwikkelingsStoornis = new FormControl('', []);
  Dyscalculie = new FormControl('', []);
  Dyslexie = new FormControl('', []);
  Dysorthografie = new FormControl('', []);
  Dyspraxie = new FormControl('', []);
  Faalangst = new FormControl('', []);
  Hoogbegaafd = new FormControl('', []);
  Taalproblemen = new FormControl('', []);
  Hoogsensitief = new FormControl('', []);
  leerzorgAndere = new FormControl('', []);

  ADDGeg: number;
  ADHDGeg: number;
  ASSGeg: number;
  FobieenGeg: number;
  GillesDeLaTouretteGeg: number;
  ConcentratieGeg: number;
  NLDGeg: number;
  andereOntwikkelingsStoornisGeg: string;
  DyscalculieGeg: number;
  DyslexieGeg: number;
  DysorthografieGeg: number;
  DyspraxieGeg: number;
  HoogbegaafdGeg: number;
  TaalproblemenGeg: number;
  HoogsensitiefGeg: number;
  FaalAngstGeg: number;
  leerzorgAndereGeg: string;

  Allergie = new FormControl('', []);
  Astma = new FormControl('', []);
  Epilepsie = new FormControl('', []);
  Gehoorproblemen = new FormControl('', []);
  Zichtsprobleem = new FormControl('', []);
  Hooikoorts = new FormControl('', []);
  Migraine = new FormControl('', []);
  Reuma = new FormControl('', []);
  Hartafwijking = new FormControl('', []);
  Diabetes = new FormControl('', []);
  LactoseInt = new FormControl('', []);
  MotorischeProb = new FormControl('', []);
  Zindelijkheid = new FormControl('', []);
  aandoeningenAndere = new FormControl('', []);

  AllergieGeg: number;
  AstmaGeg: number;
  EpilepsieGeg: number;
  GehoorproblemenGeg: number;
  ZichtprobleemGeg: number;
  HooikoortsGeg: number;
  MigraineGeg: number;
  ReumaGeg: number;
  HartafwijkingGeg: number;
  DiabetesGeg: number;
  LactoseIntGeg: number;
  MotorischeProbGeg: number;
  ZindelijkheidGeg: number;
  aandoeningenAndereGeg: string;

  Rilatine = new FormControl('', []);
  Concerta = new FormControl('', []);
  Risperdal = new FormControl('', []);
  medicatieAndere = new FormControl('', []);

  RilatineGeg: number;
  ConcertaGeg: number;
  RisperdalGeg: number;
  medicatieAndereGeg: string;

  constructor( private service: InschrijvingService) { }

  ngOnInit() {
    this.inschrijving = this.service.getLocalInschrijving();
    this.ADDGeg = this.inschrijving.iadd;
    this.ADHDGeg = this.inschrijving.iadhd;
    this.ASSGeg = this.inschrijving.iass;
    this.FobieenGeg = this.inschrijving.ifobie;
    this.GillesDeLaTouretteGeg = this.inschrijving.igillesDeLaTourette;
    this.ConcentratieGeg = this.inschrijving.iconcentratie;
    this.NLDGeg = this.inschrijving.inld;
    this.andereOntwikkelingsStoornisGeg = this.inschrijving.iandereInfo;
    this.DyscalculieGeg = this.inschrijving.lzdyscalculie;
    this.DyslexieGeg = this.inschrijving.lzdyscalculie;
    this.DysorthografieGeg = this.inschrijving.lzdysorthografie;
    this.DyspraxieGeg = this.inschrijving.lzdyspraxie;
    this.FaalAngstGeg = this.inschrijving.lzfaalangst;
    this.HoogbegaafdGeg = this.inschrijving.lzhoogbegaafd;
    this.TaalproblemenGeg = this.inschrijving.lztaalproblemen;
    this.HoogsensitiefGeg = this.inschrijving.lzhoogsensitief;
    this.leerzorgAndereGeg = this.inschrijving.lzandereInfo;
    this.AllergieGeg = this.inschrijving.mgallergie;
    this.AstmaGeg = this.inschrijving.mgastma;
    this.EpilepsieGeg = this.inschrijving.mgepilepsie;
    this.GehoorproblemenGeg = this.inschrijving.mggehoorprobleem;
    this.ZichtprobleemGeg = this.inschrijving.mgzichtsprobleem;
    this.HooikoortsGeg = this.inschrijving.mghooikoorts;
    this.MigraineGeg = this.inschrijving.mgmigraine;
    this.ReumaGeg = this.inschrijving.mgreuma;
    this.HartafwijkingGeg = this.inschrijving.mghartafwijking;
    this.DiabetesGeg = this.inschrijving.mgdiabetes;
    this.LactoseIntGeg = this.inschrijving.mglactoreIntolerantie;
    this.MotorischeProbGeg = this.inschrijving.mgmotorischeProblemen;
    this.ZindelijkheidGeg = this.inschrijving.mgzindelijkheid;
    this.aandoeningenAndereGeg = this.inschrijving.mgandereInfo;
    this.RilatineGeg = this.inschrijving.mrilatine;
    this.ConcertaGeg = this.inschrijving.mconcerta;
    this.RisperdalGeg = this.inschrijving.mrisperdal;
    this.medicatieAndereGeg = this.inschrijving.mandereInfo;
  }

  updateInschrijving(){
    this.inschrijving.iadd = this.ADDGeg;
    this.inschrijving.iadhd = this.ADHDGeg;
    this.inschrijving.iass = this.ASSGeg;
    this.inschrijving.ifobie = this.FobieenGeg;
    this.inschrijving.igillesDeLaTourette = this.GillesDeLaTouretteGeg;
    this.inschrijving.iconcentratie = this.ConcentratieGeg;
    this.inschrijving.inld = this.NLDGeg;
    this.inschrijving.iandereInfo = this.andereOntwikkelingsStoornisGeg;
    this.inschrijving.lzdyscalculie = this.DyscalculieGeg;
    this.inschrijving.lzdyslexie = this.DyslexieGeg;
    this.inschrijving.lzfaalangst = this.FaalAngstGeg;
    this.inschrijving.lzdysorthografie = this.DysorthografieGeg;
    this.inschrijving.lzdyspraxie = this.DyspraxieGeg;
    this.inschrijving.lzhoogbegaafd = this.HoogbegaafdGeg;
    this.inschrijving.lztaalproblemen = this.TaalproblemenGeg;
    this.inschrijving.lzhoogsensitief = this.HoogsensitiefGeg;
    this.inschrijving.lzandereInfo = this.leerzorgAndereGeg;
    this.inschrijving.mgallergie = this.AllergieGeg;
    this.inschrijving.mgastma = this.AstmaGeg;
    this.inschrijving.mgepilepsie = this.EpilepsieGeg;
    this.inschrijving.mggehoorprobleem = this.GehoorproblemenGeg;
    this.inschrijving.mgzichtsprobleem = this.ZichtprobleemGeg;
    this.inschrijving.mghooikoorts = this.HooikoortsGeg;
    this.inschrijving.mgmigraine = this.MigraineGeg;
    this.inschrijving.mgreuma = this.ReumaGeg;
    this.inschrijving.mghartafwijking = this.HartafwijkingGeg;
    this.inschrijving.mgdiabetes = this.DiabetesGeg;
    this.inschrijving.mglactoreIntolerantie = this.LactoseIntGeg;
    this.inschrijving.mgmotorischeProblemen = this.MotorischeProbGeg;
    this.inschrijving.mgzindelijkheid = this.ZindelijkheidGeg;
    this.inschrijving.mgandereInfo = this.aandoeningenAndereGeg;
    this.inschrijving.mrilatine = this.RilatineGeg;
    this.inschrijving.mconcerta = this.ConcertaGeg;
    this.inschrijving.mrisperdal = this.RisperdalGeg;
    this.inschrijving.mandereInfo = this.medicatieAndereGeg;

    this.service.updateLocalInschrijving(this.inschrijving);
  }

}
