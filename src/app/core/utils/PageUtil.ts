import { Injectable } from '@angular/core';
import { descrypt, encrypt } from './sesion-util';


@Injectable({
  providedIn: 'root'
})
export class PageUtil {
  constructor() { }
  
  setSelectedNews(newsSelected: any) {
    sessionStorage.setItem("newsSelected", encrypt(JSON.stringify(newsSelected), 'newsSelected'));
  }

  getSelectedNews(): any {
    return descrypt(sessionStorage.getItem("newsSelected") ?? '', 'newsSelected');
  }
}
