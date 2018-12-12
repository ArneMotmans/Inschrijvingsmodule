import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BijkomendeInfoKortComponent } from './bijkomende-info-kort.component';

describe('BijkomendeInfoKortComponent', () => {
  let component: BijkomendeInfoKortComponent;
  let fixture: ComponentFixture<BijkomendeInfoKortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BijkomendeInfoKortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BijkomendeInfoKortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
