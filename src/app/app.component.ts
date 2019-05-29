import { Component } from '@angular/core';
import { InforPaginaService } from './services/infor-pagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private infoPaginaService: InforPaginaService,
              public productoService: ProductosService ) {

  }

}
