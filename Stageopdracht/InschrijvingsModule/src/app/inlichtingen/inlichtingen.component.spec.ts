import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlichtingenComponent } from './inlichtingen.component';

describe('InlichtingenComponent', () => {
  let component: InlichtingenComponent;
  let fixture: ComponentFixture<InlichtingenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlichtingenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlichtingenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
