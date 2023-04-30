import { Component, OnInit } from '@angular/core';
import { Plants } from '../../plants';
import { PlantsService } from '../../plants.service';

@Component({
  selector: 'app-plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.css'],
})
export class PlantsListComponent implements OnInit {
  plants: Plants[] | undefined;
  extPlants: number = 0;
  intPlants: number = 0;
  constructor(private plantsService: PlantsService) {}
  ngOnInit() {
    this.plantsService.getPlants().subscribe(
      (plants) => {
        this.plants = plants;
        this.extPlants = plants.filter((p) => p.tipo == 'Exterior').length;
        this.intPlants = plants.filter((p) => p.tipo == 'Interior').length;
      },
      (err) => console.log(err)
    );
  }
}
