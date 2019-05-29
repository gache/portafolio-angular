import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina-inteface';

@Injectable({
  providedIn: 'root'
})
export class InforPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any [] = [];

  constructor( private http: HttpClient) {

this.cargarInfo();
this.cargarEquipo();
  // Leer el archivo JSON
  
}

public cargarInfo() {
  this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {

    this.cargada = true;
    this.info = resp;

  });

  }
public cargarEquipo() {
  this.http.get('https://angular-html-86236.firebaseio.com/equipo.json')
      .subscribe( (resp: any []) => {

    this.equipo = resp;
    // this.info = resp;
    // console.log(resp);

  });

}

}
