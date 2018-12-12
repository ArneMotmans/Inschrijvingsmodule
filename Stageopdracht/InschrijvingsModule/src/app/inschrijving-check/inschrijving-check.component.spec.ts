import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InschrijvingCheckComponent } from './inschrijving-check.component';

describe('InschrijvingCheckComponent', () => {
  let component: InschrijvingCheckComponent;
  let fixture: ComponentFixture<InschrijvingCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InschrijvingCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InschrijvingCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
