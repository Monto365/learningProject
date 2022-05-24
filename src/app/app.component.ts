import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'learningProject';
  public number:number = 10;

  sumar(){
    this.number+=1;
  }

  resta(){
    this.number-=1;
  }

}
