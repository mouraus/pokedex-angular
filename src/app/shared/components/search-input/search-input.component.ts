import { Component, OnInit, Output } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  public getAllList: any

  @Output() public  emitSearch: EventEmitter<string> = new EventEmitter();

  public searchPokemon(value: string) {
    return this.emitSearch.emit(value);
  }

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.pokeApiService.getApiList.subscribe(
      {
        next: (res) => {
          console.log(res);
          this.getAllList = res.results
        },
        error: (err) => console.log(err)
      }
    )
  }



}



