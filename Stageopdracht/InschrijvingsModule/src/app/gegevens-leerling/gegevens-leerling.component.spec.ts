import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GegevensLeerlingComponent } from './gegevens-leerling.component';

describe('GegevensLeerlingComponent', () => {
  let component: GegevensLeerlingComponent;
  let fixture: ComponentFixture<GegevensLeerlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GegevensLeerlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GegevensLeerlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
