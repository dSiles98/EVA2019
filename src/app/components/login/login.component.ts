import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }


  public isError= false;
  public email: string='';
  public password: string='';
  ngOnInit() {
  }

  onLogin(){
    this.authService.loginUser(this.email,this.password)
    .then((res)=>{
      this.router.navigate(['']);
    }).catch(err=> console.log('err', err.message));
  }


}
