import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-profissionais-consultar",
  templateUrl: "./profissionais-consultar.component.html"
})
export class ProfissionaisConsultarComponent implements OnInit {

  public role: string;
  public roleRoute: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.roleRoute = this.router.url.split("/")[1];
    this.role = this.roleRoute.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase());
  }

}
