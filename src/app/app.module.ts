import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageDisplayComponent } from './image-display/image-display.component';
import { AlpacaPartsComponent } from './alpaca-parts/alpaca-parts.component';
import { AlpacaStyleComponent } from './alpaca-style/alpaca-style.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageDisplayComponent,
    AlpacaPartsComponent,
    AlpacaStyleComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
