import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Router} from "@angular/router";

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() ArrayIndex;
  @Input() PokemonData;


  constructor(private pokemonService: PokemonService,
    public router: Router) { }

  ngOnInit() {
  }

  VerDetalle(){
    //Esto es un boton al cual le dan click y tiene que redireccionar a otra pagina y modificar selectedPokemon
    this.pokemonService.updateSelectedPokemon(this.PokemonData);
    this.router.navigate(['/detalle', this.ArrayIndex]);
  }
}
