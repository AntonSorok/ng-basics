import { Component, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { UsersService } from './users.service';
import { EventEmitter } from 'stream';




export interface test {
  name: string
  id: number
  max_harvest: Number
  growth_time: number
  size:number
  smoothness: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  @Output() addEvent = new EventEmitter()

  title: string = 'Welcome!'
  // response: any
  // responseInfo:any
  // i:number = 0
  // y:number = 1

  data: any
  infourl: any
info:any

  name: any
  id: any
  max_harvest: any
  growth_time: any
  size:any
  smoothness: any


constructor(private user:UsersService){

  this.user.getData().subscribe(data => {
    console.log(data)
    this.data = data
  })
  // this.user.getInfo().subscribe(info => { 
  //   console.log(info)
  //   this.info = info
  // })

}




test(item:any) { 
  // console.log(this.infourl)
  // console.log(item)
  console.log('work')
  console.log(this.user)




  
  this.user.getInfo(item).subscribe(info => { 
    console.log(info)
    this.name = [info.name]
    this.id = [info.id]
    this.max_harvest = [info.max_harvest]
    this.growth_time = [info.growth_time]
    this.size = [info.size]
    this.smoothness = [info.smoothness]

    
  })
}


  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

//   constructor(private http: HttpClient){}

//   ngOnInit(): void {
//     this.http.get('https://pokeapi.co/api/v2/berry/').subscribe((response) => {
//       this.response = response
//       console.log(response)
//     })


//   //   this.http.get('https://pokeapi.co/api/v2/berry/').subscribe((response) => {
//   //     this.response = response
//   //     console.log(response)
//   //     for(this.i < 20; this.i++;){
//   //         console.log(this.i)
//   //     } 
//   // })
//   // this.y = this.i + 1
//   this.http.get('https://pokeapi.co/api/v2/berry/' + this.y ).subscribe((response) => {
//       this.responseInfo = response
//       console.log(this.responseInfo)
//   })

// }
}
// Разобраться с циклом for. Почему не могу получать данные других фруктов.

