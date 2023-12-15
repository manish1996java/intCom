import { Component } from '@angular/core';
import { CustomPipe } from './pipes/custom-pipe.pipe';
import { UpperCasePipe, LowerCasePipe, TitleCasePipe, DecimalPipe,PercentPipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'angular-project';
  price:number = 67777;
  date:Date = new Date();
}
