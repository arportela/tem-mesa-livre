import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaisCriarComponent } from './locais-criar.component';

describe('LocaisCriarComponent', () => {
  let component: LocaisCriarComponent;
  let fixture: ComponentFixture<LocaisCriarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocaisCriarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaisCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
