import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuttigeInformatieComponent } from './nuttige-informatie.component';

describe('NuttigeInformatieComponent', () => {
  let component: NuttigeInformatieComponent;
  let fixture: ComponentFixture<NuttigeInformatieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuttigeInformatieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuttigeInformatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
