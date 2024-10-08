import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { descrypt } from "./sesion-util";

@Injectable({
  providedIn: 'root'
})
export class ConfigUtil {
  defaultProgram = 6;
  userToken!: string | null;
  constructor(
    private router: Router,
    private http: HttpClient) { }

  urlChangeEmit() {
    const miEvento = new CustomEvent('urlChangeEmit');
    document.dispatchEvent(miEvento);
  }

  contentChangeEmit() {
    const miEvento = new CustomEvent('contentChangeEmit');
    document.dispatchEvent(miEvento);
  }

  getUrl() {
    let savedData: {
      url: string;
      name: string;
    };
    savedData = descrypt(sessionStorage.getItem("urlSaved") ?? '', 'urlSaved');
    return savedData;
  }
}
