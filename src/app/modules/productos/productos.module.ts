import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosPageComponent } from './pages/productos-page.component';
import { AgMaterialModule } from '../ag-material/ag-material.module';
import { FormularioComponent } from './components/formulario/formulario.component';
import { AgFormlyModule } from '../../components/formly/ag-formly.module';
import { AgTableModule } from '../../components/table/ag-table.module';
import { ListaComponent } from './components/lista/lista.component';

@NgModule({
  declarations: [ProductosPageComponent, FormularioComponent, ListaComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    AgMaterialModule,
    AgFormlyModule,
    AgTableModule,
  ],
  exports: [ProductosPageComponent],
})
export class ProductosModule {}
