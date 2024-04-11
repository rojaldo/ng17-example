import { Character } from './character';

export class Hero extends Character{
    constructor(_name: string, _description = '') {
        super();
        this._name = _name;
        this._description = _description;
    }

}