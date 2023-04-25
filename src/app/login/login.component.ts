import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  errorMessage: string = '';
  constructor(private router: Router) {}
 

  ngOnInit(): void {
  }

    login(): void {

      const users = JSON.parse(localStorage.getItem('clients') || '[]');
      
      const user = users.find((user:any)=> user.email === this.email && user.password === this.password);

      if(user) {
        this.router.navigate(['/home']);
      } else {
        alert('Invalid username or password.');
        this.router.navigate(['/register']);
      }
    }
    directToRegister():void{
      this.router.navigate(['/register']);
    }
  }
