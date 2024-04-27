

import { Component } from '@angular/core';


@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})






export class ArticleComponent {

 

  



  contador: number = 0;
  hora:string="";
  incrementContador(value : number):void{
    this.contador+=value;
  }

  resetContador(){
    this.contador=0;
  }

  texto():void{
    this.hora=Date()
  }

  
}


