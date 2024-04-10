import { Injectable } from '@angular/core';
import { CalculatorInfo } from '../models/calculatorinfo';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  infos = new Map<string, CalculatorInfo>();

  constructor() { }

  saveData(info: CalculatorInfo) {
    this.infos.set(info.id, info);
  }

  readonly getData = (id: string): CalculatorInfo | undefined => this.infos.get(id) ? this.infos.get(id) : undefined;
  
}
