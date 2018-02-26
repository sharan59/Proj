import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { NgForm } from '@angular/forms';
 import { Router } from '@angular/router';
 import {DataService} from '../data.service';



@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css'],
  providers :[DataService]
})
export class RegFormComponent  {

 firstName : string;
 lastName : string;
 Gender : string;
 fatherName : string;
 Address : string;
 PhoneNumber : number;
 Email : string;
 Password : string;
 AadharNumber : string;
 ConfirmPassword : string;
 x : boolean;
 y : boolean;


 details : any;

 constructor(private _http:Http ,private router:Router){

 }
 ngOnInit() {
}

 onsubmit(a)
 {
   this.firstName=a.firstName;
   this.lastName=a.lastName;
   this.Gender =a.Gender
   this.fatherName=a.fatherName;
   this.Address = a.address;
   this.PhoneNumber=a.PhoneNumber;
   this.Email=a.Email;
   this.Password=a.Password;
   this.ConfirmPassword=a.ConfirmPassword
   this.AadharNumber = a.AadharNumber;
   
   console.log(this.firstName+this.lastName+this.Gender+this.fatherName+this.Address+this.PhoneNumber+this.Email+this.Password+this.ConfirmPassword+this.AadharNumber);
   console.log(a);
   var headers= new Headers();
   headers.append('Content-Type', 'application/json');
   let options = new RequestOptions({ headers: headers });
   
 this._http.post('/api/signup',a, options)
           .subscribe(data => {
                 alert('Registered Successfully');
                 this.router.navigate(['api/login'])
           }, error => {
               console.log(JSON.stringify(error.json()));
           })
 
 }

//  addemp(firstName,lastName,fatherName,Address,PhoneNumber,Email,AadharNumber)
// {

//   this.firstName  = firstName;
//   this.lastName  = lastName;
//   this.fatherName = fatherName;
//   this.Address = Address;
//   this.PhoneNumber = PhoneNumber;
//   this.Email= Email;
//   this.Password ;
//   this.ConfirmPassword;
//   this.AadharNumber = AadharNumber;
  

  

//   if(this.Password == this.ConfirmPassword)
//   {
//     let newo:any;
//   newo = {firstName:this.firstName,lastName:this.lastName,fatherName :this.fatherName, Address: this.Address,
//     PhoneNumber : this.PhoneNumber,Email : this.Email, AadharNumber : this.AadharNumber}
//   this.details.push(newo);
//   }
//   else
//   {
//     console.log("Password and confirm password did not match")
//   }  
// }
//   onsubmit(a : any){
// console.log(a);
//   }

  validate()
  {
    this.Password;
    this.ConfirmPassword ;

    if(this.Password == this.ConfirmPassword)
    {
      this.x = true;
      this.y = false;
    }
    else if(this.Password != this.ConfirmPassword)
    {
      this.x = false;
      this.y = true;
    }
  }

  // redirect() {
  //   this.router.navigate(['./login']);
  // }
}
