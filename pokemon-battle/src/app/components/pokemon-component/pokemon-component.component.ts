import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonList } from '../../models/pokemon-battle.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-component',
  templateUrl: './pokemon-component.component.html',
  styleUrl: './pokemon-component.component.css'
})
export class PokemonComponentComponent {


  @Input() pokemon: PokemonList | undefined;

  constructor(private pokemonService : PokemonService) { }


}
