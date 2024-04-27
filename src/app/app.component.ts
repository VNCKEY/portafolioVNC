import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { SectionComponent } from './section/section.component';
import { AsideComponent } from './aside/aside.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SectionComponent,
    ArticleComponent,
    AsideComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio';
  systemVolume:number=7
  numero:number=7;

  prueba=this.palabrasuper("Ouptput");

  palabrasuper($event:string):string{
    return ""+$event;
  }
}
