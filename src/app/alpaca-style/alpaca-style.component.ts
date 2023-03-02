import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AlpacaImageService } from '../alpaca-image.service';
import { BehaviorSubject } from 'rxjs';
import { Alpaca } from '../alpaca.model';

@Component({
  selector: 'app-alpaca-style',
  templateUrl: './alpaca-style.component.html',
  styleUrls: ['./alpaca-style.component.css']
})
export class AlpacaStyleComponent implements OnInit {
  alpacaStyles:string[];
  selectedPart:string;
  alpaca: Alpaca;
  constructor(private alpacaService: AlpacaImageService) {}

  ngOnInit(): void {
    this.alpacaService.selectedPartSubject.subscribe(() => {
      this.alpacaStyles = this.alpacaService.getStyles();
      this.selectedPart = this.alpacaService.getSelectedPart();
    })
    this.alpacaService.alpacaSubject.subscribe(() => {
      this.alpaca = this.alpacaService.alpaca;
      console.log("style");
    })
  }

  changeStyle(style:string) {
    this.alpacaService.changeStyle(style);
  }
}
