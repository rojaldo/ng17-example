export class Apod {
    private _date = '';
    private _explanation = '';
    private _hdurl = '';
    private _mediaType = '';
    private _serviceVersion = '';
    private _title = '';
    private _url = '';

    private _isVideo = false;
    private _isImage = false;

    private _videoId = '';

    constructor(json?: any) {
        if (json) {
            this._date = json.date;
            this._explanation = json.explanation;
            this._hdurl = json.hdurl;
            this._mediaType = json.media_type;
            this._serviceVersion = json.service_version;
            this._title = json.title;
            this._url = json.url;
            this._isVideo = json.media_type === 'video';
            this._isImage = json.media_type === 'image';
            if (this._isVideo) {
                this.getVideoId();
            }
        }
    }

    get date() {
        return this._date;
    }

    get explanation() {
        return this._explanation;
    }

    get hdurl() {
        return this._hdurl;
    }

    get mediaType() {
        return this._mediaType;
    }

    get serviceVersion() {
        return this._serviceVersion;
    }

    get title() {
        return this._title;
    }

    get url() {
        return this._url;
    }

    get isVideo() {
        return this._isVideo;
    }

    get isImage() {
        return this._isImage;
    }

    get videoId() {
        console.log('Video ID:' + this._videoId);
        
        return this._videoId;
    }

    getVideoId() {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = this._url.match(regExp);
        let temp = (match&&match[7].length==11)? match[7] : false;
        if(temp){
            this._videoId = temp;
        }
    }
}