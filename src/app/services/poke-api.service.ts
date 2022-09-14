import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
  constructor(private http: HttpClient) { }

  // private customFormmattedList: Array<{ name: string, base_url: string, status: any }> | any = [];

  get getApiList(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap(res => res),
      tap(res => {
        res.results.map((resPokemons: any) => {
          this.getApi(resPokemons.url)
          .subscribe(
            res => resPokemons.status = res
          )
        })
      })
    )
  }

          // this.http.get<any>(resPokemons.url).pipe(
          //   map(
          //     res => res
          //   )

          // )
          
  public getApi(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(map (response => response))
  }


}
