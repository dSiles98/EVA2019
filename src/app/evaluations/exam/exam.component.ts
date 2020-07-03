import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { SpeechService } from 'src/app/services/speech.service';
import {  ArtyomService } from "ng-artyom/src/lib/artyom.service";
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  text ='';
  position = 0;
  @ViewChild("formulario") myForm: ElementRef;
  questions={
    preguntas: [
      {
        contenido:'Para tener acceso a Internet se tiene que contar con protocolos',
        respuestas:['WWW','SMTP','TCP/IP'],
        solucion: 3
      },
      {
        contenido:'¿Qué significa las iniciales W.W.W.?',
        respuestas:['Web Wide World','Wide Web Worl','Wold Wide Web'],
        solucion: 2
      },
      {
        contenido:'¿Qué es un Dominio?',
        respuestas:['Domina a las páginas inferiores','Determina el ancho de banda','Es el nombre que identifica a un sitio'],
        solucion: 3
      },
      {
        contenido:'¿A qué se llaman Buscadores?',
        respuestas:['Son páginas que nos permiten en tiempo real encontrar información',
        'A los servidores que informan',
        'Son programas o aplicaciones alojadas en una página web'],
        solucion: 1
      }
    ]
  }
  constructor(private serviceSpeech:SpeechService, private artyService:ArtyomService, private render:Renderer2) {
    this.serviceSpeech.record('es_ES').subscribe(
      (data)=>{
        const filter = data.trim();
        console.log(filter);
        switch (filter) {
          case 'siguiente':
            this.text='siguiente';
            this.next();
            this.readQuestion(this.position);
            break;
          case 'anterior':
            this.text='anterior';
            this.prev();
            this.readQuestion(this.position);
            break;
          case 'primero':
            this.text='1';
            this.checkByPosition(this.position,1);
            this.readResponse(1);
            break;
          case 'segundo':
            this.text='2';
            this.checkByPosition(this.position,2);
            this.readResponse(2);
            break;
          case 'tercero':
            this.text='3';
            this.checkByPosition(this.position,3);
            this.readResponse(3);
            break;
          case 'entregar':
            this.text='entregar';
            this.artyService.say("comando aceptado");
          default:
            break;
        }
      }
    );
  }
  ngOnInit() {
    this.artyService.init(
      {
        lang:"es-ES",
        debug:true,
        listen:true
      }
    )
    setTimeout(() => {
      this.clearColor();
      this.setColor(this.getQuestion(this.position),'#3f51b5');
      this.position=0;
    }, 2000);
  }
  prev(){
    this.clearColor();
    this.position--;
    if(this.position<0){
      this.position=this.questions.preguntas.length-1;
    }
    this.setColor(this.getQuestion(this.position),'#3f51b5');
  }
  next(){
    this.clearColor();
    this.position++;
    if(this.position>=this.questions.preguntas.length){
      this.position=0;
    }
    this.setColor(this.getQuestion(this.position),'#3f51b5');
  }
  clearColor(){
    let count=0;
    this.questions.preguntas.forEach(element => {
      this.setColor(this.getQuestion(count),'#121212');      
      count++;
    });
  }
  //res position 1 ...2 ..3
  checkByPosition(index,resPosition){
    this.checkPosition(resPosition,this.questionPosition(index));
  }
  questionPosition(index){
    return this.myForm.nativeElement.children[index];
  }
  getQuestion(index){
    return this.questionPosition(index).children[0];
  }
  checkPosition(index,question){
    return question.children[index].children[0].children[0].checked=true;
  }
  setColor(element,color){
    element.style.color=color;
  }
  readQuestion(index){
    this.artyService.say(this.questions.preguntas[index].contenido);
  }
  readResponse(index){
    this.artyService.say(this.questions.preguntas[this.position].respuestas[index-1]);
  }
}
