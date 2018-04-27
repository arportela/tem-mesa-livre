import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaisAlterarComponent } from './locais-alterar.component';

describe('LocaisAlterarComponent', () => {
  let component: LocaisAlterarComponent;
  let fixture: ComponentFixture<LocaisAlterarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocaisAlterarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaisAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
