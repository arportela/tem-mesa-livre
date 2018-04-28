import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  public roleRoute: string;
  public navegacao: string;

  constructor(private router: Router) {
    this.navegacao = "";
  }

  ngOnInit() {
    this.roleRoute = this.router.url.split("/")[1];
    switch (this.router.url.split("/")[2]) {
      case "locais":
      case "reservas":
        this.navegacao = this.router.url.split("/")[2];
        break;
      case "profissionais":
        this.navegacao = this.router.url.split("/")[2];
        if (this.roleRoute == "profissional" && this.router.url.split("/")[3] == "alterar") {
          this.navegacao += "/alterar";
        }
    }
  }

  public navegar(destino: string) {
    this.navegacao = destino;
  }
}
