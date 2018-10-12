import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  pokemons: Array<Object>;
  selectedPokemon;

  constructor(private pokemonService: PokemonService, public router: Router,) {
    this.pokemons = this.pokemonService.GetPokemons();
  }

  ngOnInit() {
  }
}
