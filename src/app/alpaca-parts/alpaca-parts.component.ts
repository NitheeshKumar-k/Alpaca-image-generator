import { Component, OnInit } from '@angular/core';
import { AlpacaImageService } from '../alpaca-image.service';

@Component({
  selector: 'app-alpaca-parts',
  templateUrl: './alpaca-parts.component.html',
  styleUrls: ['./alpaca-parts.component.css']
})
export class AlpacaPartsComponent implements OnInit{
  alpacaParts:string[];
  selectedPart:string;
  constructor(private alpacaService: AlpacaImageService) {}

  ngOnInit(): void {
    this.alpacaParts = this.alpacaService.getAlpacaParts();
    this.selectedPart = this.alpacaService.getSelectedPart();
  }

  setSelectedPart(part:string) {
    this.selectedPart = part;
    this.alpacaService.setSelectedPart(part);
    console.log(part);
  }
}
