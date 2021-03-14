import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNacimiento: Date = new Date();

  customYearValues= [2021, 2025, 1995,1885,2043]

  customPickerOptions = {
    buttons:[
      {
        text:'Hola',
        handler: (object) => {
          console.log(object)
        }
      },
      {
        text:'Mundo',
        handler:()=>{
          console.log("log")
        }
      }
      
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(event){
    this.fechaNacimiento = new Date(event.detail.value);
  }
}
