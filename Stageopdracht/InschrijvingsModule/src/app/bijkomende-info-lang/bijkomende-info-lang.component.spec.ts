import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BijkomendeInfoLangComponent } from './bijkomende-info-lang.component';

describe('BijkomendeInfoLangComponent', () => {
  let component: BijkomendeInfoLangComponent;
  let fixture: ComponentFixture<BijkomendeInfoLangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BijkomendeInfoLangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BijkomendeInfoLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
