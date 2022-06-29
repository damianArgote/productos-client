import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ProductosService } from '../../productos.service';
import { Producto } from '../../models/producto.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
})
export class FormularioComponent implements OnInit, OnDestroy {
  model: any = {};
  fields: FormlyFieldConfig[] = [];
  textButton: string = 'Guardar';
  productosSubs!: Subscription;
  constructor(
    private productosService: ProductosService,
    public dialogRef: MatDialogRef<FormularioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: unknown
  ) {}
  ngOnDestroy(): void {
    this.productosSubs.unsubscribe();
  }

  ngOnInit(): void {
    this.initForm();
    if (this.data) {
      this.textButton = 'Editar';
      this.model = this.data;
    }
  }

  initForm() {
    this.fields = [
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            key: 'nombre',
            type: 'input',
            className: 'col-6',
            templateOptions: {
              label: 'Nombre',
              required: true,
              type: 'text',
            },
          },
          {
            key: 'codigo',
            type: 'input',
            className: 'col-2',
            templateOptions: {
              label: 'Codigo',
              required: true,
              type: 'text',
            },
          },
          {
            key: 'vencimiento',
            type: 'input',
            className: 'col-3',
            templateOptions: {
              label: 'Vencimiento',
              type: 'text',
            },
          },
        ],
      },
    ];
  }

  onSubmit() {
    if (!this.data) {
      this.productosService
        .addProducto(this.model as Producto)
        .subscribe((resp: any) => {
          if (resp?.ok) {
            this.productosSubs = this.productosService
              .getProductos()
              .subscribe((res) => (this.productosService._productos = res));
            this.dialogRef.close();
          }
        });
    } else {
      this.productosService
        .updateProducto(this.model as Producto)
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
}
