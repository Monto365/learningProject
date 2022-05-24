import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'learningProject';
  public number:number = 10;

  acumular(valor:number){
    this.number += valor;

  }

}
