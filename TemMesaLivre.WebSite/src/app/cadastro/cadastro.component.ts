import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormControl, ValidatorFn } from "@angular/forms";

import { RequiredSpecificationService } from "../shared/specifications/required.specification.service";
import { CNPJSpecificationService } from "../shared/specifications/cnpj.specification.service";
import { EmailSpecificationService } from "../shared/specifications/email.specification.service";
import { PasswordSpecificationService } from "../shared/specifications/password.specification.service";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  public role: string;
  public roleRoute: string;
  public loginRoute: string;
  public form: FormGroup;
  public fields: { [key: string]: FormControl } = {};

  constructor(
    private router: Router,
    private requiredValidation: RequiredSpecificationService,
    private cnpjValidation: CNPJSpecificationService,
    private emailValidation: EmailSpecificationService,
    private passwordValidation: PasswordSpecificationService
  ) { }

  ngOnInit() {
    this.roleRoute = this.router.url.split("/")[1];
    this.loginRoute = "../../{0}/login".replace("{0}", this.roleRoute);
    this.role = this.roleRoute.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase());

    this.fields["NomeUsuario"] = new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation)])
    this.fields["RazaoSocial"] = new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation)]);
    this.fields["CNPJ"] = new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation), this.cnpjValidation.validate.bind(this.cnpjValidation)]);
    this.fields["Email"] = new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation), this.emailValidation.validate.bind(this.emailValidation)]);
    this.fields["Senha"] = new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation), this.passwordValidation.validate.bind(this.passwordValidation)]);

    this.fields["Nome"] = new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation)]);
    this.fields["Celular"] = new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation)]);
    this.fields["RG"] = new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation)]);
    this.fields["CPF"] = new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation)]);

    this.form = new FormGroup({
      NomeUsuario: this.fields["NomeUsuario"],
      RazaoSocial: this.fields["RazaoSocial"],
      CNPJ: this.fields["CNPJ"],
      Email: this.fields["Email"],
      Senha: this.fields["Senha"],
      Nome: this.fields["Nome"],
      Celular: this.fields["Celular"],
      RG: this.fields["RG"],
      CPF: this.fields["CPF"]
    });

    switch (this.roleRoute) {
      case "administrador":
      case "recursos-humanos":
        this.form.controls["Nome"].disable();
        this.form.controls["Celular"].disable();
        this.form.controls["RG"].disable();
        this.form.controls["CPF"].disable();
        this.form.controls["CNPJ"].enable();
        this.form.controls["RazaoSocial"].enable();
        break;
      case "profissional":
        this.form.controls["Nome"].enable();
        this.form.controls["Celular"].enable();
        this.form.controls["RG"].enable();
        this.form.controls["CPF"].enable();
        this.form.controls["CNPJ"].disable();
        this.form.controls["RazaoSocial"].disable();
        break;
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
  }
}
