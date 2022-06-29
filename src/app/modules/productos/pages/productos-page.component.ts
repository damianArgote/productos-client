import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormularioComponent } from '../components/formulario/formulario.component';

@Component({
  selector: 'app-productos-page',
  templateUrl: './productos-page.component.html',
})
export class ProductosPageComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(FormularioComponent, {
      disableClose: true,
    });
  }
}
