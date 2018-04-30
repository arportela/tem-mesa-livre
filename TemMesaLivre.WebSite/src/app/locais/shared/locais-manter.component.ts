import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, ValidatorFn } from "@angular/forms";
import { Router } from "@angular/router";

import { AlertComponent } from "../../shared/alert/alert.component";
import { RequiredSpecificationService } from "../../shared/specifications/required.specification.service";
import { LocaisManterDialogComponent } from "./dialog/locais-manter.dialog.component";

@Component({
  selector: "app-locais-manter",
  templateUrl: "./locais-manter.component.html"
})
export class LocaisManterComponent implements OnInit {

  public role: string;
  public roleRoute: string;
  public form: FormGroup;
  public fields: { [key: string]: FormControl } = {};
  public callbackDialog: Function;
  public periodos: any[];

  @ViewChild(AlertComponent) alertComponent: AlertComponent;
  @ViewChild(LocaisManterDialogComponent) public dialogComponent: LocaisManterDialogComponent;

  constructor(private router: Router, private requiredValidation: RequiredSpecificationService) { }

  ngOnInit() {
    this.roleRoute = this.router.url.split("/")[1];
    this.role = this.roleRoute.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase());
    this.periodos = [];
    this.callbackDialog = this.adicionarPeriodo.bind(this);

    this.fields["Descricao"] = new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation)]);
    this.fields["Endereco"] = new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation)]);
    this.fields["Cidade"] = new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation)]);
    this.fields["Estado"] = new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation)]);
    this.fields["QtdMesas"] = new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation)]);

    this.fields["QtdCadeiras"] = new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation)]);
    this.fields["CustoPorHora"] = new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation)]);
    this.fields["DataInicial"] = new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation)]);
    this.fields["DataFinal"] = new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation)]);

    this.form = new FormGroup({
      Descricao: this.fields["Descricao"],
      Endereco: this.fields["Endereco"],
      Cidade: this.fields["Cidade"],
      Estado: this.fields["Estado"],
      QtdMesas: this.fields["QtdMesas"],
      QtdCadeiras: this.fields["QtdCadeiras"],
      CustoPorHora: this.fields["CustoPorHora"],
      DataInicial: this.fields["DataInicial"],
      DataFinal: this.fields["DataFinal"]
    });
  }
  
  adicionar() {
    this.dialogComponent.show(this.periodos, null);
  }

  adicionarPeriodo(periodo: any) {
    this.periodos.push(periodo);
    this.periodos.sort()
  }

  excluirPeriodo(index: number) {
    this.periodos.splice(index, 1);
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
  }
}
