import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  MyInfo: any
  res: any
  infourl:any
  item:any


  constructor(private http: HttpClient) { }

  getData() {

    let url = 'https://pokeapi.co/api/v2/berry/'
    return this.http.get<any>(url)
      .pipe(map(
        res => res.results))
  }

  getInfo(item:any) { 
    let url = this.item
    // console.log(this.item)
    return this.http.get<any>(item)
      .pipe(map(
        res => res))

  }

}
