import { FormGroup, Validators, FormBuilder, FormArray , FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'] 
})
export class RegistrationFormComponent {
  form: FormGroup = new FormGroup({
    addresses: new FormArray([])
  });


  siteKey: string

  // constructor(private fb: FormBuilder){
  //   this.form = fb.group({
  //     mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
  //   })
  //   this.siteKey= '6LediXkaAAAAADj9My8U-jQKQbPSb4G0eWebJEbh';
  // }

  constructor() {
    this.siteKey= '6LediXkaAAAAADj9My8U-jQKQbPSb4G0eWebJEbh';
  }
  Occupations = [
    { id: 1 , name: 'abc'},
    { id: 2 , name: 'def'}
  ]

  // addaddress() {
  //   this.addaddressArray.push(this.addaddressGroup)
  // }

  addAddress(addaddress: HTMLInputElement) { 
    this.addresses.push(new FormControl(addaddress.value));
    addaddress.value= ''
  }

  get addresses() {
    return this.form.get('addresses') as FormArray;
  }
  log(x) {
    console.log(x) 
  }
  submit(g) {
    console.log(g)  
  }
}
