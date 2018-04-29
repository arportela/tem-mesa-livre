import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, ValidatorFn } from "@angular/forms";

import { RequiredSpecificationService } from "../shared/specifications/required.specification.service";
import { SessionService } from "../shared/session/session.service";
import { AlertComponent } from "../shared/alert/alert.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {

  public role: string;
  public roleRoute: string;
  public cadastroRoute: string;
  public recuperarSenhaRoute: string;
  public form: FormGroup;

  @ViewChild(AlertComponent) alertComponent: AlertComponent;

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
      Password: new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation)]),
      Role: new FormControl("")
    });

    switch (this.roleRoute) {
      case "administrador":
        this.form.controls["Role"].setValue(1);
        break;
      case "recursos-humanos":
        this.form.controls["Role"].setValue(2);
        break;
      case "profissional":
        this.form.controls["Role"].setValue(3);
        break;
    }

    console.log("Logado: ", this.service.isLogged());
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    console.log("form: ", this.form);
    this.service.login(this.form.value)
      .subscribe(res => {
        this.router.navigate(["/"]);
      }, err => {
        let error = JSON.parse(err._body);
        this.alertComponent.showAlert(error.error_description, "alert-danger");
      });
  }
}
