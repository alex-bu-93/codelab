import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CodeDemoRunnerComponent } from './code-demo-runner.component';

describe('CodeDemoRunnerComponent', () => {
  let component: CodeDemoRunnerComponent;
  let fixture: ComponentFixture<CodeDemoRunnerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CodeDemoRunnerComponent],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeDemoRunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
