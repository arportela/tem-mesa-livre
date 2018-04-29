import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers, URLSearchParams } from "@angular/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/catch";
import { empty } from "rxjs/observable/empty";
import { of } from "rxjs/observable/of";

@Injectable()

export class SessionService {
  private token: any;
  private claims: any;

  constructor(private http: Http, private router: Router) {
    this.token = JSON.parse(localStorage.getItem("user_token"));
    this.claims = JSON.parse(localStorage.getItem("user_claims"));
  }

  public isLogged(): boolean {
    return (this.token && this.token.expiration_date > Date.now());
  }

  public getClaims(): Observable<any>  {
    let strClaims = localStorage.getItem("user_token");
    if (strClaims) {
      let claims = JSON.parse(strClaims);

      let header: Headers = new Headers();
      header.append("Authorization", "bearer " + claims.access_token);
      let options = new RequestOptions({ headers: header });

      return this.http.get("http://localhost:52744/api/usuario/getclaims", options)
        .map(res => {
          this.claims = res.json();
          localStorage.setItem("user_claims", JSON.stringify(this.claims));

          return this.claims;
        });
    }

    return empty();
  }

  public login(form: any): Observable<any>  {
    let header: Headers = new Headers();
    header.append("Content-Type", "application/x-www-form-urlencoded");
    let options = new RequestOptions({ headers: header });

    let body = new URLSearchParams();
    body.set("username", form.Username);
    body.set("password", form.Password);
    body.set("grant_type", "password");

    return this.http.post("http://localhost:52744/token", body)
      .switchMap(res => {        
        this.token = res.json();
        this.token.expiration_date = Date.now() + (res.json().expires_in * 1000);

        localStorage.setItem("user_token", JSON.stringify(this.token));
        
        return this.getClaims();
      });
  }

  public logout() {
    localStorage.clear();
  }
}
