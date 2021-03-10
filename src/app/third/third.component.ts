import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'third',
  template: `
  <h2>{{ title }}<h2>
  <img src = "{{ imageUrl }}"/>
  <img [src] = "imageUrl"/>
  <table>
     <tr>
        <td [attr.colspan] = "colSpan"></td>
     </tr>
  </table>
  <button class="btn btn-primary" [class.active] = "isActive">Save</button>
  <span class ="glyphicon glyphicon-star"></span>
  <button [style.backgroundColor]="isActives ? 'blue' : 'red'"></button>
  <button (click) = "onSave()">SaveOne</button>
  <input [(ngModel)] = "email" (keyup.enter) = "onKeyUp()"/>
  `
})

export class ThirdComponent {
  title = 'List of courses'
  imageUrl = "/home/zenways/Pictures/Images/book.jpeg";
  colSpan = 2;
  isActive = true;
  isActives=  false;
  onSave() {
    console.log("button is clicked")
  }
  email = "apurva24@gmai.com"
  // onKeyUp(email) {
  //     console.log(email)
    
  // }

  onKeyUp() {
    console.log(this.email)
  }
  @Input() myInput:string;

  ngOnInit() {
    console.log(this.myInput)
  }
 
}
