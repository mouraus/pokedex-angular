import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // public pokemons: Array<{
  //   nome: string, skils: Array<{
  //     skill: string;
  //   }>
  // }> = [
  //     {
  //       nome: 'Bulbasaur',
  //       skils: [
  //         {
  //           skill:'skill'
  //         },
  //         {
  //           skill:'skill'
  //         }
  //       ]
  //     }
  //   ]
  constructor() { }

  ngOnInit(): void {
  }

}
