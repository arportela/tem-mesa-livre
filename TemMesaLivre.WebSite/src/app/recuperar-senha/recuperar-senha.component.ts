import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormControl, ValidatorFn } from "@angular/forms";

import { RequiredSpecificationService } from "../shared/specifications/required.specification.service";
import { PasswordSpecificationService } from "../shared/specifications/password.specification.service";
import { PasswordEqualsSpecificationService } from "../shared/specifications/password-equals.specification.service";

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html'
})
export class RecuperarSenhaComponent implements OnInit {

  public role: string;
  public roleRoute: string;
  public loginRoute: string;
  public form: FormGroup;

  constructor(
    public router: Router,
    private requiredValidation: RequiredSpecificationService,
    private passwordValidation: PasswordSpecificationService,
    private passwordEqualsValidation: PasswordEqualsSpecificationService
  ) { }

  ngOnInit() {
    this.roleRoute = this.router.url.split("/")[1];
    this.loginRoute = "../../{0}/login".replace("{0}", this.roleRoute);
    this.role = this.roleRoute.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase());

    this.form = new FormGroup({});

    this.form.addControl("Senha", new FormControl(""));
    this.form.addControl("ConfirmacaoSenha", new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation), this.passwordValidation.validate.bind(this.passwordValidation), this.passwordEqualsValidation.validate("Senha").bind(this.passwordEqualsValidation)]));
    this.form.controls["Senha"].setValidators([this.requiredValidation.validate.bind(this.requiredValidation), this.passwordValidation.validate.bind(this.passwordValidation), this.passwordEqualsValidation.validate("ConfirmacaoSenha").bind(this.passwordEqualsValidation)]);
  }

  onSubmit() {
    this.form.controls["Senha"].updateValueAndValidity();
    this.form.controls["ConfirmacaoSenha"].updateValueAndValidity();

    if (this.form.invalid) {
      return;
    }

    console.log("Valido");
  }
}
