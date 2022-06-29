import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductosService } from '../../../modules/productos/productos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css'],
})
export class AlertaComponent implements OnInit, OnDestroy {
  productosSubs!: Subscription;
  constructor(
    private productosService: ProductosService,
    public dialogRef: MatDialogRef<AlertaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: unknown
  ) {}
  ngOnDestroy(): void {
    this.productosSubs.unsubscribe();
  }

  ngOnInit(): void {}

  onClick() {
    this.productosService
      .deleteProducto(this.data as number)
      .subscribe((resp: any) => {
        if (resp?.ok) {
          this.productosSubs = this.productosService
            .getProductos()
            .subscribe((res) => (this.productosService._productos = res));
          this.dialogRef.close();
        }
      });
  }
}
