import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  text = 'Nicolas Brasiliano';
  imageUrl = 'https://picsum.photos/200/300';
  imageDesc = 'essa é uma imagem aleatoria'
  buttonText = 'Clique aqui';
  textRed = 'textred';
  bgColor = 'green';
  fontSize = '20px';
  widthImg = 600;
  textInput = '';
  number = 0;
  destroy = false;

  constructor() { }

  ngOnInit(): void {
  }

  retornaNome(){
    return this.text;
  }

  clicou(value: any){
    console.log('clicou aqui', value);
  }

  clicouNoFilho(text: any){
    console.log(text);
  }

  incrementa(){
    this.number++;
  }

  destroiComponent(){
    this.destroy = true;
  }
} 
