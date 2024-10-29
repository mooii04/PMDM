import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonResponse } from '../../models/pokemon.interface';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {

  options: AnimationOptions = {
    path: '/assets/animation.json',
  };

  @Input() pokemonId: number | undefined;
  pokemon: PokemonResponse | undefined;
  @Input() life: number = 100;
  @Output() onAttack = new EventEmitter<number>();
  @Input() isMyTurn: boolean = false;

  constructor(private pokemonService: PokemonService) { }

  //? con la interrogación se pregunta si el valor es nulo o indefinido
  //! con la exclamaicon se asegura que el valor no es nulo o indefinido
  ngOnInit(): void {
    this.pokemonService.getPokemon(this.pokemonId!).subscribe(pokemonResponse => {
      this.pokemon = pokemonResponse;
    });
  }

  getProgressBarColor(): string {
    if (this.life > 60) {
      return 'success';
    } else if (this.life > 40) {
      return 'warning';
    } else {
      return 'danger';
    }
  }

  doAttack() {
    var damage = Math.floor(Math.random() * (30 - 10)) + 10;
    this.onAttack.emit(damage);
  }

}
