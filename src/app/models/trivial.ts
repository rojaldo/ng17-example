export class TrivialCard {
    private _category = ''
    private _type = ''
    private _difficulty = ''
    private _question = ''
    private _correctAnswer = ''
    private _incorrectAnswers: string[] = []
    private _answers: string[] = []
    private _isAnswered = false
    private _correctAnswerIndex = 0

    constructor(json: any) {
        this._category = json.category
        this._type = json.type
        this._difficulty = json.difficulty
        this._question = json.question
        this._correctAnswer = json.correct_answer
        this._incorrectAnswers = json.incorrect_answers
        this._answers = [this._correctAnswer, ...this._incorrectAnswers]
        this._correctAnswerIndex = this._answers.indexOf(this._correctAnswer)
    }

    get category() {
        return this._category
    }

    get type() {
        return this._type
    }

    get difficulty() {
        return this._difficulty
    }

    get question() {
        return this._question
    }

    get answers() {
        return this._answers
    }

    get isAnswered() {
        return this._isAnswered
    }

    get correctAnswerIndex() {
        return this._correctAnswerIndex
    }

    set isAnswered(value: boolean) {
        this._isAnswered = value
    }

    isCorrectAnswer(answer: string){
        return this._correctAnswer === answer
    }
}