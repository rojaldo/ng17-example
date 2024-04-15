export class SWCharacter {
    
    private _name = ''
    private _height = 0
    private _mass = 0
    private _hairColor = ''
    private _skinColor = ''
    private _eyeColor = ''
    private _birthYear = ''
    private _gender = ''

    constructor(json: any) {
        this._name = json.name
        this._height = json.height
        this._mass = json.mass
        this._hairColor = json.hair_color
        this._eyeColor = json.eye_color
        this._birthYear = json.birth_year
        this._gender = json.gender
    }


    get name() {
        return this._name
    }

    get height() {
        return this._height
    }

    get mass() {
        return this._mass
    }

    get hairColor() {
        return this._hairColor
    }

    get skinColor() {
        return this._skinColor
    }

    get eyeColor() {
        return this._eyeColor
    }

    get birthYear() {
        return this._birthYear

    }

    get gender () {
        return this._gender 
    }
}
