import { Component, OnInit } from '@angular/core';
import { LocaisManterComponent } from "../shared/locais-manter.component";
import { Router } from "@angular/router";

import { AlertComponent } from "../../shared/alert/alert.component";
import { RequiredSpecificationService } from "../../shared/specifications/required.specification.service";

@Component({
  selector: 'app-locais-criar',
  templateUrl: '../shared/locais-manter.component.html'
})
export class LocaisCriarComponent extends LocaisManterComponent implements OnInit {

  constructor(
      router: Router,
      requiredValidation: RequiredSpecificationService) {
    super(router, requiredValidation);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
