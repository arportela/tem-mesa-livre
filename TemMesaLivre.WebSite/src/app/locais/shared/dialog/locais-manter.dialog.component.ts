import { Component, ViewChild, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { ModalDirective } from "ngx-bootstrap";
import { FormGroup, FormControl } from "@angular/forms";
import { RequiredSpecificationService } from "../../../shared/specifications/required.specification.service";
import { TimeSpecificationService } from "../../../shared/specifications/time.specification.service";
import { EventService } from "../../../shared/event/event.service";

@Component({
  selector: "app-locais-manter-dialog",
  templateUrl: "./locais-manter.dialog.component.html"
})

export class LocaisManterDialogComponent {

  @ViewChild('lgModal') public dialogComponent: ModalDirective;
  @Input() callback: Function;
  public formDialog: FormGroup;
  public fields: { [key: string]: FormControl } = {};
  public periodos: any[];

  public alert: boolean;
  public alertSeverity: string;
  public alertMessage: string;
  private indice: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private requiredValidation: RequiredSpecificationService,
    private timeSpecificationService: TimeSpecificationService,
    private event: EventService
  ) {
  }

  ngOnInit() {
    this.alert = false;
    
    this.fields["HorarioInicial"] = new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation), this.timeSpecificationService.validate.bind(this.timeSpecificationService)]);
    this.fields["HorarioFinal"] = new FormControl("", [this.requiredValidation.validate.bind(this.requiredValidation), this.timeSpecificationService.validate.bind(this.timeSpecificationService)]);

    this.formDialog = new FormGroup({
      HorarioInicial: this.fields["HorarioInicial"],
      HorarioFinal: this.fields["HorarioFinal"]
    });

    this.dialogComponent.onHidden.subscribe(() => {
      this.formDialog.reset();
      this.ngOnInit();
    })
  }

  show(periodos: any[], indice: number) {
    this.periodos = periodos;
    this.indice = indice;
    this.dialogComponent.show();
  }

  onSubmit() {
    this.alert = false;

    if (this.formDialog.invalid) {
      return;
    }

    if (!this.intervaloHorariosEhValido(this.formDialog.value)) {
      this.alert = true;
      this.alertSeverity = "alert-danger";
      this.alertMessage = "Não é permitida a sobreposição de horários.";
      return;
    }

    this.callback(this.formDialog.value);
    this.dialogComponent.hide();
  }

  intervaloHorariosEhValido(model: any) {
    let ret = true;

    if (this.periodos && this.periodos.length > 0) {
      this.periodos.forEach((_, index) => {
        if (!this.indice || this.indice != index) {
          if (+model.HorarioInicial >= +_.HorarioInicial && +model.HorarioInicial <= +_.HorarioFinal) {
            ret = false;
          }
          if (+model.HorarioFinal >= +_.HorarioInicial && +model.HorarioFinal <= +_.HorarioFinal) {
            ret = false;
          }
        }
      });
    }

    return ret;
  }
}
