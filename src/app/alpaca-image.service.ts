import { Injectable } from '@angular/core';
import { Alpaca } from './alpaca.model';

@Injectable({
  providedIn: 'root'
})
export class AlpacaImageService {
  alpaca: Alpaca;

  backgorundBasePath = 'assets/alpaca/backgrounds/';
  legBasePath = 'assets/alpaca/leg/';
  neckBasePath = 'assets/alpaca/neck/';
  nosePath = 'assets/alpaca/nose.png';
  eyesBasePath = 'assets/alpaca/eyes/';
  earsBasePath = 'assets/alpaca/ears/';
  mouthBasePath = 'assets/alpaca/mouth/';
  hairBasePath = 'assets/alpaca/hair/';
  accessoryBasePath = 'assets/alpaca/accessories/';

  backgroundList = ['blue50', 'blue60', 'blue70', 'darkblue30', 'darkblue50', 'darkblue70', 'green50', 'green60', 'green70', 'grey40', 'grey70', 'grey80', 'red50', 'red60', 'red70', 'yellow50', 'yellow60', 'yellow70'];
  legList = ['bubble-tea', 'cookie', 'default', 'game-console', 'tilt-backward', 'tilt-forward'];
  neckList = ['bend-backward', 'bend-forward', 'default', 'thick'];
  eyesList = ['angry', 'default', 'naughty', 'panda', 'smart', 'star'];
  earsList = ['default', 'tilt-backward', 'tilt-forward'];
  mouthList = ['astonished', 'default', 'eating', 'laugh', 'tongue'];
  hairList = ['bang', 'curls', 'default', 'elegant', 'fancy', 'quiff', 'short'];
  accessoriesList = ['earings', 'flower', 'glasses', 'headphone'];

  extension = '.png';
  constructor() {
    this.alpaca = {
      background: 'assets/alpaca/backgrounds/blue50.png',
      leg: 'assets/alpaca/leg/bubble-tea.png',
      neck: 'assets/alpaca/neck/default.png',
      nose: 'assets/alpaca/nose.png',
      eyes: 'assets/alpaca/eyes/angry.png',
      ears: 'assets/alpaca/ears/default.png',
      mouth: 'assets/alpaca/mouth/astonished.png',
      hair: 'assets/alpaca/hair/bang.png',
      accessory: 'assets/alpaca/accessories/earings.png',
    }
  }

  getStyles() {

  }
}
