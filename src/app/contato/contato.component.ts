import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formContato = this.fb.group({
    nome: ["", [
      Validators.minLength(3),
      Validators.required
    ]],
    assunto: ["", [
      Validators.minLength(4),
      Validators.required
    ]],
    telefone:["", [
      Validators.minLength(11),
      Validators.required
    ]],
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    mensagem:["", [
      Validators.minLength(10),
      Validators.required
    ]]
  });

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
  }

  enviarFormulario(){
    alert('Formulário Enviado!');
    this.formContato.reset();
  }
}
