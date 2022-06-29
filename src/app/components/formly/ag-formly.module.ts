import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyComponent } from './formly.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

@NgModule({
  declarations: [FormlyComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
  ],
  exports: [FormlyComponent],
})
export class AgFormlyModule {}
