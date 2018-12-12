import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InschrijvingsAanzetComponent } from './inschrijvings-aanzet.component';

describe('InschrijvingsAanzetComponent', () => {
  let component: InschrijvingsAanzetComponent;
  let fixture: ComponentFixture<InschrijvingsAanzetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InschrijvingsAanzetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InschrijvingsAanzetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
