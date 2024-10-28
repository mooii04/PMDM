import { Component } from '@angular/core';
import { PokemonList } from '../../models/pokemon-battle.interface';

@Component({
  selector: 'app-pokemon-component',
  templateUrl: './pokemon-component.component.html',
  styleUrl: './pokemon-component.component.css'
})
export class PokemonComponentComponent{

  listadoPokemon: PokemonList[] = [];


}
