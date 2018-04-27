import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaisExcluirComponent } from './locais-excluir.component';

describe('LocaisExcluirComponent', () => {
  let component: LocaisExcluirComponent;
  let fixture: ComponentFixture<LocaisExcluirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocaisExcluirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaisExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
