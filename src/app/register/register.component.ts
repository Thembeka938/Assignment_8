import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

 name:string="";
 surname:string="";
 email:string="";
 town:string="";
 suburb:string="";
 street:string="";
 code:string="";
 password:string="";
 confirmPassword="";
 phone:string="";
 securityQuestion:string="";
 answer:string="";
 constructor(private router:Router){}
 ngOnInit(): void {
 
 }
 recordDetails(){
  const user={
    name:this.name,
    surname:this.surname,
    email:this.email,
    address:{
      town:this.town,
      suburb:this.suburb,
      street:this.street,
      code:this.code
    },
    password:this.password
  };
 const usersA=JSON.parse(localStorage.getItem('users')||'[]');
  const foundUser =usersA.find((user:any)=>user.email==this.email);
  if(foundUser){
    alert("user exists");
    return;
  }
  usersA.push(user);
  localStorage.setItem('clients',JSON.stringify(usersA));
  alert("registered");
  this.router.navigate(['/login'])
 }
 
 directTologin(){
  this.router.navigate(["./login"])
 }
}
