import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  pokemon: any = {};
  
  //Representa el objeto/objetos pokemon de mi pokemon
  evoluciones: any[];
  imagenEvoluciones: any[];
  index: number;
  constructor( private activatedRoute: ActivatedRoute, private PokemonService: PokemonService) 
  { 
    this.activatedRoute.params.subscribe(params => {this.index = params['id']})
    this.activatedRoute.params.subscribe(params => {this.pokemon = this.PokemonService.getPokemon(params['id']);
    this.evoluciones = this.PokemonService.getEvoluciones(this.index);
  });
  }
  ngOnInit() {
  }

  //Obtiene url de la imagen de la evolución:
  getImagen(pokemon: string){
    return this.PokemonService.getImageReal(pokemon);
  }

}
