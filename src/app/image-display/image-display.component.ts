import { Component, OnInit } from '@angular/core';
import { AlpacaImageService } from '../alpaca-image.service';
import { Alpaca } from '../alpaca.model';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements OnInit {
  alpaca: Alpaca;

  constructor(private imageService: AlpacaImageService) { }

  ngOnInit() {
    this.alpaca = this.imageService.alpaca;
  }
}
