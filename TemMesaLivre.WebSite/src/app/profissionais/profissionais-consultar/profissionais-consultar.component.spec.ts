import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProfissionaisConsultarComponent } from "./profissionais-consultar.component";

describe("ProfissionaisConsultarComponent", () => {
  let component: ProfissionaisConsultarComponent;
  let fixture: ComponentFixture<ProfissionaisConsultarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfissionaisConsultarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissionaisConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
