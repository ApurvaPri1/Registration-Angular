import { AuthorsService } from './../authors.service';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'authors',
//   template: '<h2>{{ title }}<h2>',
//   styleUrls: ['./authors.component.css']
// })
// export class AuthorsComponent  {
//   title = 'List of tilesssss'
// }


// import { Component } from '@angular/core';

// @Component({
//     selector: 'authors',
//     template: '<h2>{{ title }}<h2>'

// })

// export class AuthorsComponent{
//     title = 'List of tilesssss'
    
// }


import { Component } from '@angular/core'; 

@Component({
  selector: 'authors',
  template: `
  <h2>{{ title }}<h2>
  <ul>
     <li *ngFor = "let course of courses">
        {{ course }}
     </li>
  </ul>
`
})
export class AuthorsComponent  {

  title = "List of courses"
  courses;

  constructor(services : AuthorsService) {
    //   let services = new AuthorsService
      this.courses = services.getAuthors()
  }
}
