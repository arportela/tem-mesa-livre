import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LocaisManterComponent } from "./locais-manter.component";

describe("LocaisManterComponent", () => {
  let component: LocaisManterComponent;
  let fixture: ComponentFixture<LocaisManterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LocaisManterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaisManterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
