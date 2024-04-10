import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CalculatorService } from '../../../services/calculator.service';
import { log } from 'console';


@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  providers: [CalculatorService],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent implements OnInit, OnDestroy{

  @Input() id = '';
  display = '';

  constructor(private service: CalculatorService){}

  ngOnInit(): void {
    this.service.display$.subscribe(value => this.display = value);
    console.log("ID: " + this.id);
    this.service.id = this.id;
    this.service.loadData();
  }

  ngOnDestroy(): void {
    this.service.saveData();
  
  }


  handleClick(value: number | string) {
    typeof value === 'number' ? this.service.handleNumber(value) : this.service.handleSymbol(value);
  }
}
