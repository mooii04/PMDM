import { Component, OnInit } from '@angular/core';
import { Vehicles } from '../../interfaces/vehicles.interfaces';
import { StarWarsVehiclesService } from '../../services/star-wars-vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css'
})
export class VehiclesComponent implements OnInit {
  
  listadoVehiculos: Vehicles[] = [];
  
  constructor(private vehiclesService: StarWarsVehiclesService) {

  }

  ngOnInit(): void {
    this.vehiclesService.getVehiclesList().subscribe((respuesta: Vehicles[]) => {
      this.listadoVehiculos = respuesta;
    });
  }

}
