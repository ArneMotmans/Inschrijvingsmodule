import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GegevensOudersComponent } from './gegevens-ouders.component';

describe('GegevensOudersComponent', () => {
  let component: GegevensOudersComponent;
  let fixture: ComponentFixture<GegevensOudersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GegevensOudersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GegevensOudersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
