import { State } from "../enums/enum";

export class CalculatorInfo {

    constructor(
        private _id = '',
        private _firstFigure = 0,
        private _secondFigure = 0,
        private _operator = '',
        private _result = 0,
        private _currentState = State.INIT) {
        
    }

    get id() {
        return this._id;
    }

    get firstFigure() {
        return this._firstFigure;
    }

    get secondFigure() {
        return this._secondFigure;
    }

    get operator() {
        return this._operator;
    }

    get result() {
        return this._result;
    }

    get currentState() {
        return this._currentState;
    }

}