import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './quote/quote.component';

@NgModule({
  imports: [CommonModule],
  declarations: [QuoteComponent],
  exports: [QuoteComponent],
})
export class FeatureQuoteModule {}
