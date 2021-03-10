// var a;
// var b;
// var c;
// var d;
// var e = [1, 2, 3];
// var f = [1, "hello", 4, 5, 'true', 6, 'fasle'];
// var ColorRed = 0;
// var ColorGreen = 1;
// var colorBlue = 2;
// var Color;
// (function (Color) {
//     Color[Color["Red"] = 0] = "Red";
//     Color[Color["Green"] = 1] = "Green";
//     Color[Color["Blue"] = 2] = "Blue";
// })(Color || (Color = {}));
// var backgroundColor = Color.Red;
<form #f="ngForm" (ngSubmit)="submit(f)">
    <div class="form-group">
        <label for="">Name:</label>
        <input required ngModel name="name" #name="ngModel" (change)="log(name)" id="name" type="text"
            class="form-control">
        <div class="alert alert-danger" *ngIf="name.touched && !name.valid">
            <div *ngIf="name.errors.required">Name is required</div>
        </div>
    </div>
    <div class="form-group">
        <label for="age">Age:</label>
        <input required ngModel name="age" #age="ngModel" (change)="log(age)"
            id="age" type="number" class="form-control">
        <div class="alert alert-danger" *ngIf="age.touched && !age.valid">
            <div *ngIf="age.errors.required">Age is required</div>
            <!-- pattern="/^(?:1[8-9]|[2-5][0-9]|60)$/" -->
            <!-- pattern="/^(?:1[8-9]|[2-5][0-9]|60)$/" -->
        </div>
    </div>

    <div class="form-group">
        <label for="email">Email:</label>
        <input required ngModel name="email" email #emails="ngModel"
            (change)="log(emails)" id="email" type="email" class="form-control">
        <div class="alert alert-danger" *ngIf="emails.touched && !emails.valid">
            <div *ngIf="emails.errors.required">Email is required</div>
            <div *ngIf="emails.errors?.email">Email is not valid </div>
            <!-- <div *ngIf="email.errors.pattern">Email is invalid</div> -->
            <!-- <div *ngIf="age.errors.pattern">Only number required</div> -->
            <!-- pattern="/^(?:1[8-9]|[2-5][0-9]|60)$/" -->
            <!-- pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" -->
        </div>
    </div>

    <div class="form-group">
        <label for="mobile">Mobile:</label>
        <input required ngModel name="moble" #mobile="ngModel" (change)="log(mobile)" id="mobile" type="text"
            class="form-control">
        <div class="alert alert-danger" *ngIf="mobile.touched && !mobile.valid">
            <div *ngIf="mobile.errors.required">Mobile is required</div>
        </div>
    </div>

    <div class="form-group">
        <label for="occupation">Occupation</label>
        <select ngModel name="occupation" id="occupation" class="form-control">
            <option *ngFor="let method of Occupations" [value]="method.id">{{ method.name }}</option>
        </select>
    </div>


    <div class="form-group">
        <label for="addressone">Address 1:</label>
        <input required ngModel name="addressone" #addressone="ngModel" (change)="log(addressone)" id="addressone"
            type="text" class="form-control">
        <div class="alert alert-danger" *ngIf="addressone.touched && !addressone.valid">
            <div *ngIf="addressone.errors.required">Address 1 is required</div>
        </div>
    </div>
    <div class="form-group">
        <label for="addresstwo">Address 2:</label>
        <input required ngModel name="addresstwo" #addresstwo="ngModel" (change)="log(addresstwo)" id="addresstwo"
            type="text" class="form-control">
        <div class="alert alert-danger" *ngIf="addresstwo.touched && !addresstwo.valid">
            <div *ngIf="addresstwo.errors.required">Address 2 is required</div>
        </div>
    </div>

    <div class="form-group">

    </div>

    <div class="form-group">
        <label for="city">City:</label>
        <input required ngModel name="city" #city="ngModel" (change)="log(city)" id="city" type="text"
            class="form-control">
        <div class="alert alert-danger" *ngIf="city.touched && !city.valid">
            <div *ngIf="addresstwo.errors.required">City is required</div>
        </div>
    </div>

    <div class="form-group">
        <label for="state">State:</label>
        <input required ngModel name="state" #state="ngModel" (change)="log(state)" id="state" type="text"
            class="form-control">
        <div class="alert alert-danger" *ngIf="state.touched && !state.valid">
            <div *ngIf="state.errors.required">State is required</div>
        </div>
    </div>


    <div class="form-group">
        <label for="pincode">Pincode:</label>
        <input required minlength="6" maxlength="6" ngModel name="pincode" #pincode="ngModel" (change)="log(pincode)"
            id="pincode" type="text" class="form-control">
        <div class="alert alert-danger" *ngIf="pincode.touched && !pincode.valid">
            <div *ngIf="pincode.errors.required">Pincode is required</div>
            <div *ngIf="pincode.errors.minlength">Upto 6 digit required</div>
            <div *ngIf="pincode.errors.maxlength">Upto 6 digit required</div>
        </div>
    </div>

    <div class="form-group">
        <label>
            <input required type="checkbox" ngModel name="isSubscribed">
            <p>I agree terms and conditions</p>
        </label>
    </div>
    <div class="form-group">
        <!-- <ngx-recaptcha2 #captchaElem [siteKey]="siteKey">
        </ngx-recaptcha2> -->
        
    </div>
   
    <button class="btn btn-primary" [disabled]="!f.valid">Submit</button>
</form>