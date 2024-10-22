import { Component, OnInit } from '@angular/core';
import { Vehicles, VehiclesResponse } from '../../models/vehicles.interfaces';
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
    this.vehiclesService.getVehiclesList().subscribe(respuesta => {
      this.listadoVehiculos = respuesta.results; 
    });
  }

  generateVehiclePhoto(url : string){

    const id = url.split('/').filter(segment => segment).pop();

    return `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`
  }

}
