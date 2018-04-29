import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LocaisConsultarComponent } from "./locais-consultar.component";

describe("LocaisConsultarComponent", () => {
  let component: LocaisConsultarComponent;
  let fixture: ComponentFixture<LocaisConsultarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocaisConsultarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaisConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
