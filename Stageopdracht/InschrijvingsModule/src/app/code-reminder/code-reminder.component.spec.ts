import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeReminderComponent } from './code-reminder.component';

describe('CodeReminderComponent', () => {
  let component: CodeReminderComponent;
  let fixture: ComponentFixture<CodeReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeReminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
