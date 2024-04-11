export class Character {
    protected _name = '';
    protected _description = '';

    get name() {
        return this._name;
    }
    get description() {
        return this._description;
    }
}