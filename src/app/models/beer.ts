export class Beer {
    private _name = '';
    private _tagline = '';
    private _firstBrewed = '';
    private _description = '';
    private _image = '';
    private _abv = 0;
    private _ibu = 0;

    constructor(json: any) {
        this._name = json.name;
        this._tagline = json.tagline;
        this._firstBrewed = json.first_brewed;
        this._description = json.description;
        this._image = json.image_url;
        this._abv = json.abv;
        this._ibu = json.ibu;
    }

    get name() {
        return this._name;
    }

    get tagline() {
        return this._tagline;
    }

    get firstBrewed() {
        return this._firstBrewed;
    }

    get description() {
        return this._description;
    }

    get image() {
        return this._image;
    }

    get abv() {
        return this._abv;
    }

    get ibu() {
        return this._ibu;
    }

}