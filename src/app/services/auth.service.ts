import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {UserInterface} from '../models/user';

import { resolve } from 'q';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( 
    public afAuth: AngularFireAuth, private afs: AngularFirestore) { }



    
  registerUser(email:string, pass: string, rol: number){
    return new Promise((resolve, reject)=>{
      this.afAuth.auth.createUserWithEmailAndPassword(email,pass)
      .then( userData =>{
       resolve(userData),
       this.updateUserData(userData.user, rol)
      }).catch(err => console.log(reject(err)))
    });
  }

  loginUser(email:string, pass: string){
    return new Promise((resolve, reject)=>{
      this.afAuth.auth.signInWithEmailAndPassword(email,pass)
      .then( userData => resolve(userData),
      err => reject(err));
    })
  }

  getAuthUser(){
    return this.afAuth.authState.pipe(map(auth=> auth));
    
  }

  isAuth(){
    return this.afAuth.authState.pipe(map(auth=> auth));
  }

  logout(){
    return this.afAuth.auth.signOut();
  }
  private updateUserData(user, rol: Number){
  
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: UserInterface = {
        id: user.uid,
        
        email: user.email,
        roles:{
          estudiante:true
        }
      }
      const data2: UserInterface = {
        id: user.uid,
        email: user.email,
        roles:{
          docente:true
        }
      }
    
      if(rol==1){
        return userRef.set(data, {merge:true})
      }else if(rol==2){
        return userRef.set(data2, {merge:true})
    }
  }

  isUserDocente(userUid){
    return this.afs.doc<UserInterface>(`users/${userUid}`).valueChanges();
  }
  isUserEstudiante(userUid){
    return this.afs.doc<UserInterface>(`users/${userUid}`).valueChanges();
  }
}
