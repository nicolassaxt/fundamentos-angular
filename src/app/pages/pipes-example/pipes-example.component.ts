import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  number = 0;
  text = 'hello World!';
  date = new Date;
  pessoa = {
    nome: 'Nicolas',
    idade: '25',
    profissao: 'Programador'
  };

  nomes = ['Jose', 'Ana', 'Maria']

  constructor(private UpperCasePipe: UpperCasePipe) { }

  
  ngOnInit(): void {
    this.text = this.UpperCasePipe.transform(this.text)
  }

  mudaValor(){
    this.text = 'novo texto';
  }

  add(text: string){
    this.nomes.push(text);
  }
}
