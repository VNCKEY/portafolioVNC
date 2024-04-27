import { Component, EventEmitter, Input, Output } from '@angular/core';
import Portafolio,{Lenguage} from './section.class';
// import Portafolio,{Lenguage,a} from './section.class';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})



export class SectionComponent {

  // @Output() palabrasupersace = new EventEmitter<string>();
  // getpalabra():void {
  //   this.palabrasupersace.emit();
  // }
  // @Input({required:true}) value:number=20;
  // @Input({transform: trimString}) label = '';
  // xd2=a[1];

  objdata={
    name:"VNC PROGRAMING",
    year:23
  }

  objlenguage=[
    {
      name:"DART",
      skill:10
    },
    {
      name:"JS & TS",
      skill:10
    },
    {
      name:"PYTHON",
      skill:10
    },
    {
      name:"KOTLIN",
      skill:10
    },
    {
      name:"RUST",
      skill:10
    }
  ]
  xd : string[] =["xd","asd"  ];
  len1= new Lenguage("Python",8);

  dateMe=new Portafolio(this.objdata,this.objlenguage);

  funcionlvlone(value: string | number | null | boolean):boolean | string{
    value = value !== null ;
    value ?? true; 
    return  value && typeof value === 'string' ? true.toString()+"": !false;
  }


  


  
}

function trimString(value: number) {
  return `${value} esto es un texto`;
}