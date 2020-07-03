import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  public email: string='';
  public password: string='';
  public rol: number=0;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterUser(){
    this.authService.registerUser(this.email, this.password, this.rol)
    .then((res)=>{
      this.router.navigate(['']);
    }).catch(err=> console.log('err', err.Message));
  }

  onSubmitRegisterUser(){
    this.authService.registerUser(this.email, this.password, this.rol)
    .then( (res)=>{
      this.router.navigate(['/login']);
    }).catch((err)=>{
      console.log(err);
    })
  }

}
