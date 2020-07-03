import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FButtonComponent } from './f-button/f-button.component';
import { MaterialModule } from '../material/material.module';
import { ChatModule} from '../chat/chat.module'
  import { from } from 'rxjs';

@NgModule({
  declarations: [FButtonComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ChatModule
  ],
  exports: [
    FButtonComponent
  ]
})
export class ChatInterfaceModule { }

