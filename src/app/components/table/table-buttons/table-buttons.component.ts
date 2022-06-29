import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { MatDialog } from '@angular/material/dialog';
import { FormularioComponent } from '../../../modules/productos/components/formulario/formulario.component';
import { AlertaComponent } from '../../modals/alerta/alerta.component';

@Component({
  selector: 'app-table-buttons',
  templateUrl: './table-buttons.component.html',
  styleUrls: ['./table-buttons.component.css'],
})
export class TableButtonsComponent implements ICellRendererAngularComp {
  public data!: any;

  constructor(public dialog: MatDialog) {}
  refresh(params: ICellRendererParams): boolean {
    console.log(params);
    return true;
  }
  agInit(params: ICellRendererParams): void {
    this.data = params.data;
  }

  onEditClick(data: any) {
    this.dialog.open(FormularioComponent, {
      data: data,
      disableClose: true,
    });
  }

  onDeleteAction(data: any) {
    this.dialog.open(AlertaComponent, {
      width: '25%',
      data: data?.id,
      disableClose: true,
    });
  }
}
