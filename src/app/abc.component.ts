import { AbcServices } from './abc.services';
// import { Component } from '@angular/core';

// @Component({
//     selector: 'abc',
//     template: '<h2>{{ title }}<h2>'

// })

// export class AbcComponent{
//     title = 'List of tilesssss'
// }



import { Component } from '@angular/core';

@Component({
  selector: 'abc',
  template: `
  <h2>{{ title }}<h2>
  <ul>
     <li *ngFor = "let course of courses">
        {{ course }}
     </li>
  </ul>
`
})
export class AbcComponent  {

  title = "List of courses"
  courses;

  constructor(){
      let service =  new AbcServices();
      this.courses = service.getCourse();
  }
}