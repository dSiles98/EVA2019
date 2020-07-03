import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChatModule } from './chat/chat.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SpeechService } from './services/speech.service';
import { ExamComponent } from './evaluations/exam/exam.component';
import { ArtyomModule } from '../../ng-artyom/src/lib/artyom.module'
import { ChatInterfaceModule } from './chat-interface/chat-interface.module';
import { from } from 'rxjs';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AuthService} from './services/auth.service';
import { Observable } from 'rxjs';
import { FormsModule} from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    ExamComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    ChatModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatToolbarModule,
    MatIconModule,
    ArtyomModule.forRoot({
      listen: true
    }),
    ChatInterfaceModule,
    FormsModule,
    AngularFireAuthModule
  ],
  providers: [SpeechService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
