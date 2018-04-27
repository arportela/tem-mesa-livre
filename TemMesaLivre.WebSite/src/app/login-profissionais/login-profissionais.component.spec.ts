import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginProfissionaisComponent } from './login-profissionais.component';

describe('LoginProfissionaisComponent', () => {
  let component: LoginProfissionaisComponent;
  let fixture: ComponentFixture<LoginProfissionaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginProfissionaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginProfissionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
