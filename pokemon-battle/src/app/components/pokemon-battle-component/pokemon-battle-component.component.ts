import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonList } from '../../models/pokemon-battle.interface';


@Component({
  selector: 'app-pokemon-battle-component',
  templateUrl: './pokemon-battle-component.component.html',
  styleUrl: './pokemon-battle-component.component.css'
})
export class PokemonBattleComponentComponent implements OnInit {

  listadoPokemon: PokemonList[] = [];

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe((response) => {
      this.listadoPokemon = response.results;
    });
  }

}