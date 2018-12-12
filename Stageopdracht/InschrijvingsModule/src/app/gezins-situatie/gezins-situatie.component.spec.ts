import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GezinsSituatieComponent } from './gezins-situatie.component';

describe('GezinsSituatieComponent', () => {
  let component: GezinsSituatieComponent;
  let fixture: ComponentFixture<GezinsSituatieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GezinsSituatieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GezinsSituatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
