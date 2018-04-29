import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProfissionaisExcluirComponent } from "./profissionais-excluir.component";

describe("ProfissionaisExcluirComponent", () => {
  let component: ProfissionaisExcluirComponent;
  let fixture: ComponentFixture<ProfissionaisExcluirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfissionaisExcluirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissionaisExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
