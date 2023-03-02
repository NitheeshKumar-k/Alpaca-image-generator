import { Component } from '@angular/core';
import { AlpacaImageService } from '../alpaca-image.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private alpacaService: AlpacaImageService) {}

  randomAlpaca() {
    this.alpacaService.randomAlpacaChange();
  }
}
