import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  private text: string = '';

  setText(nouText: string): void {
    this.text = nouText;
  }

  getText(): string {
    return this.text;
  }
  constructor() { }
}
