import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  @Input() myInput:string;
  @Output() myOutput:EventEmitter<string>=new EventEmitter();
  outputString ="Hi I am your child in coutput properties"
  constructor() { }

  ngOnInit(): void {
    console.log(this.myInput)
  }
  sendData(){
    this.myOutput.emit(this.outputString)
  }

}

// import { Component } from '@angular/core';

// @Component({
//   selector:'favourite',
//   template: `
//   <h2>Helloooo</h2>
//   <span class = "glyphicon glyphicon-star"></span>
//   `
// })

// export class FavouriteComponent {

// }
