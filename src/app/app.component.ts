import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = []
  title = 'my-app';
  inputVariable = "Hi i am parents of input properties "

  getData(value){
    console.log(value)
  }
  firstName:string="welcome"
}
