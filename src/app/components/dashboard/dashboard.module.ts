import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { AgMaterialModule } from '../../modules/ag-material/ag-material.module';
import { DashboarRoutingModule } from './dashboar-routing.module';
@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, AgMaterialModule, DashboarRoutingModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
