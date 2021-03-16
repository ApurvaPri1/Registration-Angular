import { FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  myReactiveForm:FormGroup;
  siteKey: string

  Occupations = [
    { id: 1 , name: 'abc'},
    { id: 2 , name: 'def'}
  ]
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.myReactiveForm = this._fb.group({
      primaryFlg: [null, Validators.required],
      name: [null, [Validators.required, Validators.minLength(2)]],
      age: [null, Validators.required],
      email: [null, [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      mobnum: [null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      occupation: [null, Validators.required],
      recaptcha: [null, Validators.required],
      address: this._fb.array([this.addAddressGroup()])
    });
  }


  addAddressGroup() {
    return this._fb.group({
      addressone: [null, Validators.required],
      addresstwo: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      zipcode: [null, [Validators.required, Validators.pattern('^[0-9]{6}$')]]
    });
  }


  addAddress() {
    this.addressArray.push(this.addAddressGroup());
  }
  removeAddress(index) {
    this.addressArray.removeAt(index);
  }
  get addressArray() {
    return <FormArray>this.myReactiveForm.get('address');
  }

  get name() {
    return this.myReactiveForm.get('name');
  }

  get age() {
    return this.myReactiveForm.get('age');
  }

  get email() {
    return this.myReactiveForm.get('email');
  }

  get mobnum() {
    return this.myReactiveForm.get('mobnum');
  }

  get occupation() {
    return this.myReactiveForm.get('occupation');
  }

  get primaryFlg() {
    return this.myReactiveForm.get('primaryFlg');
  }

  get recaptcha() {
    return this.myReactiveForm.get('recaptcha');
  }

  onSubmit(){
      console.log(this.myReactiveForm.value)
    }
}
