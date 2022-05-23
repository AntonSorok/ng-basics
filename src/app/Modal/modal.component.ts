import { Component, Input, OnInit, Output } from "@angular/core";
import { HttpClient } from '@angular/common/http'




export interface test {
    name: string
    id: number
    max_harvest: Number
    growth_time: number
    size:number
    smoothness: number
  }
  

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})


export class ModalWindow implements OnInit {

    @Input()


    title: string = 'sasas'
    user:any
    name: any
    id: any
    max_harvest: any
    growth_time: any
    size:any
    smoothness: any
  

testClick(item:any) {

}

    ngOnInit(): void {
        // this.user.getInfo(item).subscribe(info => { 
        //     console.log(info)
        //     this.name = [info.name]
        //     this.id = [info.id]
        //     this.max_harvest = [info.max_harvest]
        //     this.growth_time = [info.growth_time]
        //     this.size = [info.size]
        //     this.smoothness = [info.smoothness]
        // this.http.get('https://pokeapi.co/api/v2/berry/').subscribe((response) => {
        //     this.response = response
        //     console.log(response)
        //     console.log(this.getData)

        //   })
      
        // this.http.get('https://pokeapi.co/api/v2/berry/').subscribe((response) => {
        //     this.response = response
        //     console.log(response)
        //     for(this.i; this.i < 20;) {
        //         // this.i =+ 1 
        //         console.log(this.i)
        //             this.i =+ this.i + 1
        //             console.log(this.i)
        //         this.http.get('https://pokeapi.co/api/v2/berry/' + this.i).subscribe((response) => {
        //             this.responseInfo = response
        //             console.log(this.responseInfo)
        //         })
        //     }
            // })
// })
//     this.http.get('https://pokeapi.co/api/v2/berry/' + this.i).subscribe((response) => {
//     this.responseInfo = response
//     console.log(this.responseInfo)
// })

//     }

        }
    }










