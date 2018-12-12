import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolloopbaanComponent } from './schoolloopbaan.component';

describe('SchoolloopbaanComponent', () => {
  let component: SchoolloopbaanComponent;
  let fixture: ComponentFixture<SchoolloopbaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolloopbaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolloopbaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
