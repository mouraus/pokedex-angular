import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public pokemons: any;
  public setPokemons: any;
  constructor(private pokeApiService: PokeApiService) { }


  ngOnInit(): void {
    this.pokeApiService.getApiList.subscribe(
      {
        next: (res) => {         
          this.setPokemons = res.results
          this.pokemons = this.setPokemons
        },
        error: (err) => console.log(err)
      }
    )
  }

  public getSearch(value: any) {
    const filter = this.setPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase())
    });
    this.pokemons = filter;
  }
}
