import { CurrencyPipe } from '@angular/common';
import { Component,  inject,  input } from '@angular/core';
import { InvestementService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
 
private investmentService= inject(  InvestementService);
get results(){
  return this.investmentService.resultsData;
}

}
