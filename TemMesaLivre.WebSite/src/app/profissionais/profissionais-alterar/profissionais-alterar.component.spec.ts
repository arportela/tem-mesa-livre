import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionaisAlterarComponent } from './profissionais-alterar.component';

describe('ProfissionaisAlterarComponent', () => {
  let component: ProfissionaisAlterarComponent;
  let fixture: ComponentFixture<ProfissionaisAlterarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfissionaisAlterarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissionaisAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
