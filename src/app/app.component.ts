import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  
  constructor( private authService: AuthService, private afAuth: AngularFireAuth){}
    user: UserInterface={
      email: '',
      roles:{}
    };
    public providerId: string = 'null';
    public isDocente: any= null;
    public isEstudiante: any=null;
    public userUid: string=null;
  ngOnInit(){
    this.getCurrentUser();
    this.authService.isAuth().subscribe( user =>{
      if (user){
        this.user.email= user.email;
        this.providerId= user.providerData[0].providerId;
        console.log(user);
      }
    })
  }
  public isLogged: boolean=false;
  public isnotLogged: boolean=true;
  
  
  getCurrentUser(){
    this.authService.isAuth().subscribe( auth=>{
      if(auth){
        console.log('user logged');
        this.isLogged=true;
        this.isnotLogged=false;
        this.userUid= auth.uid;
        this.authService.isUserDocente(this.userUid).subscribe(userRole=>{
          this.isDocente= Object.assign({}, userRole.roles);
          this.isDocente= this.isDocente.hasOwnProperty('docente');
        })
          this.authService.isUserEstudiante(this.userUid).subscribe(userRole=>{
          this.isEstudiante= Object.assign({}, userRole.roles);
          this.isEstudiante= this.isEstudiante.hasOwnProperty('estudiante');
        })
      }else{
        console.log('NOT USER');
        this.isLogged=false;
        this.isnotLogged=true;
        console.log(this.isnotLogged);
      }
    })
  }

  onLogout(){
    this.afAuth.auth.signOut();
    this.isLogged=false;
  }

}