import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
// @ts-ignore
import {yellowSubmarine, changeSize, countWords, afegirImatge} from './funcions.js';
@Component({
  selector: 'app-prova',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css'
})
export class ProvaComponent implements OnInit{
  Prova: any;
  constructor() {
  }
  ngOnInit(): void {
    this.majuscules();
    this.Prova = document.URL;
    yellowSubmarine("yellow");
    changeSize('provaTaula', 500, 300);
    countWords('paragraf', 'resultat');
    afegirImatge();
  }

  llistaElements: string[] = ['Element 1', 'Element 2', 'Element 3'];
  midaLletra: number = 16;
  augmentar() {
    this.midaLletra += 2;
  }

  majuscules() {
    const majus = document.getElementById('titol')
    if (majus) {
      majus.innerText = majus.innerText.toUpperCase();
    }
  }

}
