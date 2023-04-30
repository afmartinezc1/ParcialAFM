import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantsComponent } from './plants.component';
import { PlantsListComponent } from './plants-list/plants-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PlantsComponent, PlantsListComponent],
  exports: [PlantsComponent],
})
export class PlantsModule {}
