import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormControl, ValidatorFn } from "@angular/forms";

import { RequiredSpecificationService } from "../shared/specifications/required.specification.service";
import { LoginService } from "./login.service";
import { SessionService } from "../shared/session/session.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  public role: string;
  public roleRoute: string;
  public cadastroRoute: string;
  public recuperarSenhaRoute: string;
  public form: FormGroup;

  constructor(
    private router: Router,
    private service: SessionService,
    private requiredValidation: RequiredSpecificationService
  ) { }

  ngOnInit() {
    this.roleRoute = this.router.url.split("/")[1];
    this.cadastroRoute = "../../{0}/cadastro".replace("{0}", this.roleRoute);
    this.recuperarSenhaRoute = "../../{0}/recuperar-senha".replace("{0}", this.roleRoute);
    this.role = this.roleRoute.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase());
    
    this.form = new FormGroup({
      Username: new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation)]),
      Password: new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation)])
    });

    console.log("Logado: ", this.service.isLogged());
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.service.login(this.form.value)
      .subscribe(res => {
        console.log("sucesso: ", res);
        this.router.navigate(['/']);
      }, err => {
        console.log("erro: ", err);
      });
  }
}
