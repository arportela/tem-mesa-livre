import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { SessionService } from "../shared/session/session.service";

@Injectable()

export class CadastroService {
  constructor(private http: Http, private session: SessionService) {

  }

  getUsuario(): Observable<any> {
    return this.http.get("http://localhost:52744/api/usuario/getusuarios")
      .map(res => res.json());
  }

  createUsuario(body: any): Observable<any> {
    let header: Headers = new Headers();
    header.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: header });

    return this.http.post("http://localhost:52744/api/usuario/create", body, options)
      .map(res => res.json());
  }

  checkUsuarioUnico(body: any): Observable<any> {
    let header: Headers = new Headers();
    header.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: header });

    return this.http.post("http://localhost:52744/api/usuario/checkUsuarioUnico", body, options);
  }
}
