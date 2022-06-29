import { Component, OnDestroy, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Subscription } from 'rxjs';
import { TableButtonsComponent } from '../../../../components/table/table-buttons/table-buttons.component';
import { ProductosService } from '../../productos.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit, OnDestroy {
  columnDefs: ColDef[] = [];
  defaultColDef: ColDef = {};
  rowData: Producto[] = [];
  productosSubs!: Subscription;

  constructor(public productosService: ProductosService) {}
  ngOnDestroy(): void {
    this.productosSubs.unsubscribe();
  }

  ngOnInit(): void {
    this.getList();
    this.setColumns();
  }

  getList() {
    this.productosSubs = this.productosService
      .getProductos()
      .subscribe((productos) => (this.productosService._productos = productos));
  }

  setColumns(): void {
    this.columnDefs = [
      {
        headerName: 'Producto',
        field: 'nombre',
      },
      {
        headerName: 'Codigo',
        field: 'codigo',
      },
      {
        headerName: 'Vencimiento',
        field: 'vencimiento',
      },
      this.setActionsColum(),
    ];

    this.defaultColDef = {
      sortable: true,
      flex: 1,
      filter: true,
      resizable: true,
    };
  }

  setActionsColum(): ColDef {
    const column: ColDef = {
      headerName: 'Acciones',
      cellRenderer: TableButtonsComponent,
    };

    return column;
  }
}
