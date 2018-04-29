import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, ValidatorFn } from "@angular/forms";

import { RequiredSpecificationService } from "../shared/specifications/required.specification.service";
import { CNPJSpecificationService } from "../shared/specifications/cnpj.specification.service";
import { EmailSpecificationService } from "../shared/specifications/email.specification.service";
import { PasswordSpecificationService } from "../shared/specifications/password.specification.service";
import { RGSpecificationService } from "../shared/specifications/rg.specification.service";
import { CPFSpecificationService } from "../shared/specifications/cpf.specification.service";
import { TelefoneSpecificationService } from "../shared/specifications/telefone.specification.service";

import { AlertComponent } from "../shared/alert/alert.component";
import { CadastroService } from "./cadastro.service";
@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html"
})
export class CadastroComponent implements OnInit {

  public role: string;
  public roleRoute: string;
  public loginRoute: string;
  public form: FormGroup;
  public fields: { [key: string]: FormControl } = {};

  @ViewChild(AlertComponent) alertComponent: AlertComponent;

  constructor(
    private router: Router,
    private service: CadastroService,
    private route: ActivatedRoute,
    private requiredValidation: RequiredSpecificationService,
    private cnpjValidation: CNPJSpecificationService,
    private emailValidation: EmailSpecificationService,
    private passwordValidation: PasswordSpecificationService,
    private rgValidation: RGSpecificationService,
    private cpfValidation: CPFSpecificationService,
    private telefoneValidation: TelefoneSpecificationService
  ) { }

  ngOnInit() {
    this.roleRoute = this.router.url.split("/")[1];
    this.loginRoute = "../../{0}/login".replace("{0}", this.roleRoute);
    this.role = this.roleRoute.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase());

    this.fields["NomeUsuario"] = new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation)]);
    this.fields["RazaoSocial"] = new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation)]);
    this.fields["CNPJ"] = new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation), this.cnpjValidation.validate.bind(this.cnpjValidation)]);
    this.fields["Email"] = new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation), this.emailValidation.validate.bind(this.emailValidation)]);
    this.fields["Senha"] = new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation), this.passwordValidation.validate.bind(this.passwordValidation)]);

    this.fields["Nome"] = new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation)]);
    this.fields["Celular"] = new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation), this.telefoneValidation.validate.bind(this.telefoneValidation)]);
    this.fields["RG"] = new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation), this.rgValidation.validate.bind(this.rgValidation)]);
    this.fields["CPF"] = new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation), this.cpfValidation.validate.bind(this.cpfValidation)]);
    this.fields["Tipo"] = new FormControl("");

    this.form = new FormGroup({
      NomeUsuario: this.fields["NomeUsuario"],
      RazaoSocial: this.fields["RazaoSocial"],
      CNPJ: this.fields["CNPJ"],
      Email: this.fields["Email"],
      Senha: this.fields["Senha"],
      Nome: this.fields["Nome"],
      Celular: this.fields["Celular"],
      RG: this.fields["RG"],
      CPF: this.fields["CPF"],
      Tipo: this.fields["Tipo"],
    });

    this.form.controls["Nome"].disable();
    this.form.controls["Celular"].disable();
    this.form.controls["RG"].disable();
    this.form.controls["CPF"].disable();
    this.form.controls["CNPJ"].enable();
    this.form.controls["RazaoSocial"].enable();

    switch (this.roleRoute) {
      case "administrador":
        this.form.controls["Tipo"].setValue(1);
        break;
      case "recursos-humanos":
        this.form.controls["Tipo"].setValue(2);
        break;
      case "profissional":
        this.form.controls["Nome"].enable();
        this.form.controls["Celular"].enable();
        this.form.controls["RG"].enable();
        this.form.controls["CPF"].enable();
        this.form.controls["CNPJ"].disable();
        this.form.controls["RazaoSocial"].disable();
        this.form.controls["Tipo"].setValue(3);
        break;
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.service.checkUsuarioUnico(this.form.value)
      .subscribe(res => {
        this.createUsuario();
      }, err => {
        let error = JSON.parse(err._body);
        
        if (err.status == 400) {
          this.alertComponent.showAlert(error.Message, "alert-danger");
        } else {
          this.alertComponent.showAlert(error.error_description, "alert-danger");
        }
      });
  }

  createUsuario() {
    this.service.createUsuario(this.form.value)
      .subscribe(res => {
        this.alertComponent.saveContext("Usuário criado com sucesso. Em e-mail de confirmação foi enviado para o endereço '" + this.form.value.Email + "' (função desativada).", "alert-success");
        this.router.navigate(["../login"], { relativeTo: this.route });
      }, err => {        
        let error = JSON.parse(err._body);
        if (err.status == 400) {
          this.alertComponent.showAlert(error.Message, "alert-danger");
        } else {
          this.alertComponent.showAlert(error.error_description, "alert-danger");
        }
      });
  }
}
