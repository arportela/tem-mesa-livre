import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { endpoints } from "../endpoints";
import { SessionService } from "../shared/session/session.service";

@Injectable()

export class RecuperarSenhaService {
  constructor(private http: Http, private session: SessionService) {

  }

  checkEmail(body: any): Observable<any> {
    let header: Headers = new Headers();
    header.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: header });

    return this.http.post(endpoints.base + "/api/usuario/checkEmail", body, options)
      .map(res => res.json());
  }

  updateSenha(body: any): Observable<any> {
    let header: Headers = new Headers();
    header.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: header });

    return this.http.post(endpoints.base + "/api/usuario/updateSenha", body, options)
      .map(res => res.json());
  }
}
