import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { StoreService } from './store.service';
import { State } from '../enums/enum';
import { CalculatorInfo } from '../models/calculatorinfo';


@Injectable()
export class CalculatorService {

  private  _id = '';

  private _display = '';
  public display$ = new BehaviorSubject<string>(this._display)

  private firstFigure = 0;
  private secondFigure = 0;
  private operator = '';
  private result = 0;
  private currentState = State.INIT;

  get id() {
    return this._id;
  }

  set id(value: string) {
    this._id = value;

  }

  constructor(private store: StoreService) { }

  saveData() {
    this.store.saveData(new CalculatorInfo(this._id, this.firstFigure, this.secondFigure, this.operator, this.result, this.currentState));
  }

  loadData() {
    let info = this.store.getData(this._id);
    if(info){
      this.firstFigure = info.firstFigure;
      this.secondFigure = info.secondFigure;
      this.operator = info.operator;
      this.result = info.result;
      this.currentState = info.currentState;
      this._display = this.firstFigure.toString();
      this.display$.next(this._display);
    }
  }


  handleNumber(value: number) {
    switch (this.currentState) {
      case State.INIT:
        this.firstFigure = value;
        this.currentState = State.FIRST_FIGURE;
        this._display = value.toString();
        break;
      case State.FIRST_FIGURE:
        this.firstFigure = this.firstFigure * 10 + value;
        this._display += value;
        break;
      case State.SECOND_FIGURE:
        this.secondFigure = this.secondFigure * 10 + value;
        this._display += value;
        break;
      case State.RESULT:
        this.clearData()
        this.firstFigure = value;
        this.currentState = State.FIRST_FIGURE;
        this._display = value.toString();
        break;
    }

    this.display$.next(this._display);
    
  }

  private clearData() {
    this.firstFigure = 0;
    this.secondFigure = 0;
    this.operator = '';
    this.result = 0;
    this.currentState = State.INIT;
    this._display = '';
  }

  handleSymbol(value: string) {
    (value === 'C') ? this.clearData() : null;

    switch(this.currentState){
      case State.INIT:
        break;
      case State.FIRST_FIGURE:
        if(value === '+' || value === '-' || value === '*' || value === '/'){
          this.operator = value;
          this.currentState = State.SECOND_FIGURE;
          this._display += value;
        }
        break;
      case State.SECOND_FIGURE:
        if(value === '='){
          this.calculate();
          this.currentState = State.RESULT;
          this._display += value + this.result;
        }
        break;
      case State.RESULT:
        let temp = this.result;
        this.clearData();
        this.firstFigure = temp;
        this.operator = value;
        this.currentState = State.SECOND_FIGURE;
        this._display = this.firstFigure + value;
        break;
    }
    this.display$.next(this._display);
  }

  private calculate() {
    switch(this.operator){
      case '+':
        this.result = this.firstFigure + this.secondFigure;
        break;
      case '-':
        this.result = this.firstFigure - this.secondFigure;
        break;
      case '*':
        this.result = this.firstFigure * this.secondFigure;
        break;
      case '/':
        this.result = this.firstFigure / this.secondFigure;
        break;
    }
  }

}
