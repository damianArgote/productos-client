import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { AgGridModule } from 'ag-grid-angular';
import { TableButtonsComponent } from './table-buttons/table-buttons.component';
import { AgMaterialModule } from '../../modules/ag-material/ag-material.module';
import { ModalsModule } from '../modals/modals.module';

@NgModule({
  declarations: [TableComponent, TableButtonsComponent],
  imports: [CommonModule, AgGridModule, AgMaterialModule, ModalsModule],
  exports: [TableComponent],
})
export class AgTableModule {}
