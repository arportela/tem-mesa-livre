import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-locais-consultar",
  templateUrl: "./locais-consultar.component.html"
})
export class LocaisConsultarComponent implements OnInit {

  public role: string;
  public roleRoute: string;
  public registros: any[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.roleRoute = this.router.url.split("/")[1];
    this.role = this.roleRoute.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase());

    this.registros = [{
      Descricao: "Teste",
      Cidade: "São Paulo",
      Estado: "SP",
      QtdMesas: 5,
      QtdCadeiras: 20
    }];
  }
}
