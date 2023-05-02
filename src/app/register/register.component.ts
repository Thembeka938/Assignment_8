import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
user:any={}
  userService: any;
 
 constructor(private router:Router, private userServi:UserService){}
 ngOnInit(): void {
  console.log("user object", this.user)
 this.user= this.userService.user
 
 }
 recordDetails(){
if (this.userServi.user.name==="" ||this.userService.surname===""){
  alert("please fill this field");
  return;
}

  
 const usersA=JSON.parse(localStorage.getItem('users')||'[]');
  const foundUser =usersA.find((user:any)=>user.email=="");
  if(foundUser){
    alert("user exists");
    return;
  }
  usersA.push(this.user);
  localStorage.setItem('user',JSON.stringify(usersA));
  alert("registered");
  this.router.navigate(['/login'])
 }
 
 directTologin(){
  this.router.navigate(["./login"])
 }
}
