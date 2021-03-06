import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { reject } from 'q';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];

  constructor( private http: HttpClient) { 
    this.cargarProducto();
  }

private cargarProducto(){
 return new Promise ( ( resolve, reject )=> {

   this.http.get('https://angular-html-86236.firebaseio.com/productos_idx.json')
   .subscribe( (resp: Producto[]) =>{
     console.log(resp);
     this.productos = resp;
     this.cargando = false;
     resolve();
   });

 });

}

getProducto(id: string) {
return this.http.get(`https://angular-html-86236.firebaseio.com/productos/${ id }.json`)

}

buscarProducto( termino: string ) {

  if ( this.productos.length === 0 ) {
    // Cargar producto
    this.cargarProducto().then( () => {
      // ejecutar despues de tener los productos
      // Aplicar filtro
      this.filtrarProducto( termino );
    });
  } else {
    // aplicar el filtro
    this.filtrarProducto( termino );
  }

}


private filtrarProducto( termino: string ) {

// console.log(this.productos);
this.productosFiltrados = [];
termino = termino.toLocaleLowerCase();

this.productos.forEach( prod => {

  const tituloLower = prod.titulo.toLocaleLowerCase();

  if ( prod.categoria.indexOf( termino ) >= 0  || tituloLower.indexOf( termino )>= 0 )  {
    this.productosFiltrados.push( prod );
  }
});

}

}
