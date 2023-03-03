import { Injectable } from '@angular/core';
import { Alpaca } from './alpaca.model';
import { BehaviorSubject } from 'rxjs';
import mergeImages from 'merge-images';

@Injectable({
  providedIn: 'root'
})
export class AlpacaImageService {
  alpaca: Alpaca;

  backgorundBasePath = 'assets/alpaca/backgrounds/';
  legBasePath = 'assets/alpaca/leg/';
  neckBasePath = 'assets/alpaca/neck/';
  noseBasePath = 'assets/alpaca/';
  eyesBasePath = 'assets/alpaca/eyes/';
  earsBasePath = 'assets/alpaca/ears/';
  mouthBasePath = 'assets/alpaca/mouth/';
  hairBasePath = 'assets/alpaca/hair/';
  accessoryBasePath = 'assets/alpaca/accessories/';

  backgroundList = ['blue50', 'blue60', 'blue70', 'darkblue30', 'darkblue50', 'darkblue70', 'green50', 'green60', 'green70', 'grey40', 'grey70', 'grey80', 'red50', 'red60', 'red70', 'yellow50', 'yellow60', 'yellow70'];
  legList = ['default', 'bubble-tea', 'cookie', 'game-console', 'tilt-backward', 'tilt-forward'];
  neckList = ['default', 'bend-backward', 'bend-forward', 'thick'];
  eyesList = ['default', 'angry', 'naughty', 'panda', 'smart', 'star'];
  earsList = ['default', 'tilt-backward', 'tilt-forward'];
  mouthList = ['default', 'astonished', 'eating', 'laugh', 'tongue'];
  hairList = ['default', 'bang', 'curls', 'elegant', 'fancy', 'quiff', 'short'];
  accessoriesList = ['earings', 'flower', 'glasses', 'headphone'];
  nose = 'nose'

  alpacaParts = ['hair', 'ears', 'eyes', 'mouth', 'neck', 'leg', 'accessories', 'background'];
  alpacaLists:AlpacaLists = {
    accessories:this.accessoriesList,
    background:this.backgroundList,
    ears:this.earsList,
    eyes:this.eyesList,
    hair:this.hairList,
    leg:this.legList,
    mouth:this.mouthList,
    neck:this.neckList
  }
  extension = '.png';

  selectedPart = 'hair';
  selectedPartSubject = new BehaviorSubject(this.selectedPart);
  alpacaSubject;

  constructor() {
    this.randomAlpaca();
    this.alpacaSubject = new BehaviorSubject(this.alpaca);
  }

  getAlpacaParts():string[] {
    return this.alpacaParts;
  }

  getSelectedPart():string {
    return this.selectedPart;
  }

  setSelectedPart(part:string) {
    this.selectedPart = part;
    this.selectedPartSubject.next(this.selectedPart);
  }

  getStyles():string[] {
    return this.alpacaLists[this.selectedPart];
  }

  changeStyle(style:string) {
    this.alpaca[this.selectedPart] = style;
  }

  randomAlpaca() {
    this.alpaca = {
      background: this.randomElement(this.backgroundList),
      accessories: this.randomElement(this.accessoriesList),
      ears: this.randomElement(this.earsList),
      eyes: this.randomElement(this.eyesList),
      hair: this.randomElement(this.hairList),
      leg: this.randomElement(this.legList),
      mouth: this.randomElement(this.mouthList),
      neck: this.randomElement(this.neckList),
      nose: this.nose
    }
  }

  randomAlpacaChange() {
    this.randomAlpaca();
    this.alpacaSubject.next(this.alpaca);
  }

  randomElement(list:string[]):string {
    return list[Math.floor(Math.random() * list.length)];
  }

  downloadImage() {
    mergeImages([
      `${this.backgorundBasePath}${this.alpaca.background}${this.extension}`,
      `${this.earsBasePath}${this.alpaca.ears}${this.extension}`,
      `${this.legBasePath}${this.alpaca.leg}${this.extension}`,
      `${this.neckBasePath}${this.alpaca.neck}${this.extension}`,
      `${this.noseBasePath}${this.alpaca.nose}${this.extension}`,
      `${this.mouthBasePath}${this.alpaca.mouth}${this.extension}`,
      `${this.hairBasePath}${this.alpaca.hair}${this.extension}`,
      `${this.eyesBasePath}${this.alpaca.eyes}${this.extension}`,
      `${this.accessoryBasePath}${this.alpaca.accessories}${this.extension}`
    ]).then((b64) => {
        var a = document.createElement("a");
        a.href = b64;
        a.download = "Alpaca.png";
        a.click();
      });

  }
}

interface AlpacaLists {
  hair:string[];
  ears:string[];
  eyes:string[];
  mouth:string[];
  neck:string[];
  leg:string[];
  accessories:string[];
  background:string[];
}