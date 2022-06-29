import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertaComponent } from './alerta/alerta.component';
import { AgMaterialModule } from '../../modules/ag-material/ag-material.module';

@NgModule({
  declarations: [AlertaComponent],
  imports: [CommonModule, AgMaterialModule],
  exports: [AlertaComponent],
})
export class ModalsModule {}
