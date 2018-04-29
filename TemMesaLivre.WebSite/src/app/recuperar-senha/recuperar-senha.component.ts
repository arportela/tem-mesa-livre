import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, ValidatorFn } from "@angular/forms";

import { RequiredSpecificationService } from "../shared/specifications/required.specification.service";
import { PasswordSpecificationService } from "../shared/specifications/password.specification.service";
import { PasswordEqualsSpecificationService } from "../shared/specifications/password-equals.specification.service";
import { EmailSpecificationService } from "../shared/specifications/email.specification.service";
import { AlertComponent } from "../shared/alert/alert.component";

import { RecuperarSenhaService } from "./recuperar-senha.service";

@Component({
  selector: "app-recuperar-senha",
  templateUrl: "./recuperar-senha.component.html"
})
export class RecuperarSenhaComponent implements OnInit {

  public role: string;
  public roleRoute: string;
  public loginRoute: string;
  public form: FormGroup;
  public recuperarSenha: boolean;

  @ViewChild(AlertComponent) alertComponent: AlertComponent;

  constructor(
    public router: Router,
    private requiredValidation: RequiredSpecificationService,
    private passwordValidation: PasswordSpecificationService,
    private passwordEqualsValidation: PasswordEqualsSpecificationService,
    private emailValidation: EmailSpecificationService,
    private service: RecuperarSenhaService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.recuperarSenha = true;
    this.roleRoute = this.router.url.split("/")[1];
    this.loginRoute = "../../{0}/login".replace("{0}", this.roleRoute);
    this.role = this.roleRoute.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase());

    this.form = new FormGroup({});

    this.form.addControl("Email", new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation), this.emailValidation.validate.bind(this.emailValidation)]));
    this.form.addControl("Senha", new FormControl(""));
    this.form.addControl("ConfirmacaoSenha", new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation), this.passwordValidation.validate.bind(this.passwordValidation), this.passwordEqualsValidation.validate("Senha").bind(this.passwordEqualsValidation)]));
    this.form.controls["Senha"].setValidators([this.requiredValidation.validate.bind(this.requiredValidation), this.passwordValidation.validate.bind(this.passwordValidation), this.passwordEqualsValidation.validate("ConfirmacaoSenha").bind(this.passwordEqualsValidation)]);
    this.form.addControl("Tipo", new FormControl(""));

    switch (this.roleRoute) {
      case "administrador":
        this.form.controls["Tipo"].setValue(1);
        break;
      case "recursos-humanos":
        this.form.controls["Tipo"].setValue(2);
        break;
      case "profissional":
        this.form.controls["Tipo"].setValue(3);
        break;
    }
  }

  onSubmit() {
    console.log("form: ", this.form);
    if (this.recuperarSenha) {
      if (this.form.controls["Email"].invalid) {
        return;
      }

      this.checkEmail();
      return;
    }

    if (this.form.invalid) {
      return;
    }

    console.log("Valido");
    this.updateSenha();
  }

  checkEmail() {
    this.service.checkEmail(this.form.value)
      .subscribe(res => {

        if (res) {
          this.recuperarSenha = false;
          this.alertComponent.showAlert("Um e-mail com instruções de recuperação de senha foi enviado para o seu endereço cadastrado. (função desativada para testes)", "alert-warning");
        } else {
          this.alertComponent.showAlert("E-mail não encontrado.", "alert-danger");
        }
      }, err => {
        this.alertComponent.showAlert("Falha de comunicação com o servidor", "alert-danger");
      });
  }

  updateSenha() {
    this.service.updateSenha(this.form.value)
      .subscribe(res => {
        this.alertComponent.saveContext("Senha redefinida com sucesso.", "alert-success");
        this.router.navigate(["../login"], { relativeTo: this.activatedRoute });
      }, err => {
        this.alertComponent.showAlert("Falha de comunicação com o servidor", "alert-danger");
      });
  }
}
