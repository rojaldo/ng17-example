enum TetrisType {
    I = 'I',
    J = 'J',
    L = 'L',
    O = 'O',
    S = 'S',
    T = 'T',
    Z = 'Z'
}

interface ITetris {
    type: TetrisType;
    shape: number[][];
    rotate(): void;
}

class TetrisI implements ITetris {
    rotation = 0;
    type = TetrisType.I;
    // 5x5 matrix
    shape = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    rotate() {
        this.rotation = (this.rotation + 1) % 2;
        if (this.rotation === 0) {
            this.shape = [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [1, 1, 1, 1, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]
            ]
        }
        else {
            this.shape = [
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0]
            ]
        }
    }
}

class TetrisJ implements ITetris {
    rotation = 0;
    type = TetrisType.J;
    // 5x5 matrix
    shape = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0]
    ];

    rotate() {
        this.rotation = (this.rotation + 1) % 4;
        this.shape = this.shape.map((row, rowIndex) => {
            return row.map((val, colIndex) => {
                return this.shape[3 - colIndex][rowIndex];
            });
        });
    }
}

class TetrisL implements ITetris {
    rotation = 0;
    type = TetrisType.L;
    // 5x5 matrix
    shape = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];
    rotate() {
        this.rotation = (this.rotation + 1) % 4;
        this.shape = this.shape.map((row, rowIndex) => {
            return row.map((val, colIndex) => {
                return this.shape[3 - colIndex][rowIndex];
            });
        });
    }
}

class TetrisO implements ITetris {
    rotation = 0;
    type = TetrisType.O;
    // 5x5 matrix
    shape = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    rotate() {
        this.rotation = (this.rotation + 1) % 4;
        this.shape = this.shape.map((row, rowIndex) => {
            return row.map((val, colIndex) => {
                return this.shape[3 - colIndex][rowIndex];
            });
        });
    }
}

class TetrisS implements ITetris {
    rotation = 0;
    type = TetrisType.S;
    // 5x5 matrix
    shape = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    rotate() {
        this.rotation = (this.rotation + 1) % 4;
        this.shape = this.shape.map((row, rowIndex) => {
            return row.map((val, colIndex) => {
                return this.shape[3 - colIndex][rowIndex];
            });
        });
    }
}

class TetrisT implements ITetris {
    rotation = 0;
    type = TetrisType.T;
    // 5x5 matrix
    shape = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    rotate() {
        this.rotation = (this.rotation + 1) % 4;
        this.shape = this.shape.map((row, rowIndex) => {
            return row.map((val, colIndex) => {
                return this.shape[3 - colIndex][rowIndex];
            });
        });
    }
}

class TetrisZ implements ITetris {
    rotation = 0;
    type = TetrisType.Z;
    // 5x5 matrix
    shape = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0]
    ];

    rotate() {
        this.rotation = (this.rotation + 1) % 4;
        this.shape = this.shape.map((row, rowIndex) => {
            return row.map((val, colIndex) => {
                return this.shape[3 - colIndex][rowIndex];
            });
        });
    }
}

export class TetrisFactory {
    public static createTetris(tetrisType: TetrisType): ITetris {
        switch (tetrisType) {
            case TetrisType.I:
                return new TetrisI();
            case TetrisType.J:
                return new TetrisJ();
            case TetrisType.L:
                return new TetrisL();
            case TetrisType.O:
                return new TetrisO();
            case TetrisType.S:
                return new TetrisS();
            case TetrisType.T:
                return new TetrisT();
            case TetrisType.Z:
                return new TetrisZ();
        }
    }
}

class TetrisComposite {
    private shape: number[][]  = [];

    private rotation = 0;

    private rotations: number[][][] = [];

    constructor() {
        
    }

    public addRow(rowIndex: number, row: number[]): void {
        this.shape[rowIndex] = row;
    }

    public removeRow(rowIndex: number): void {
        this.shape.splice(rowIndex, 0);
    }

    public addRotation(rotation: number[][]): void {
        this.rotations.push(rotation);
    }

    public removeRotation(rotation: number[][]): void {
        this.rotations.splice(this.rotations.indexOf(rotation), 0);
    }

    public getShape(): number[][] {
        return this.shape;
    }

    public rotate(): void {
        this.rotation = (this.rotation + 1) % 4;
        this.shape = this.rotations[this.rotation];
    }
}

class TetrisBuilder {
    private tetrisComposite: TetrisComposite = new TetrisComposite();

    public addRow(rowIndex: number, row: number[]): TetrisBuilder {
        this.tetrisComposite.addRow(rowIndex, row);
        return this;
    }

    public removeRow(rowIndex: number): TetrisBuilder {
        this.tetrisComposite.removeRow(rowIndex);
        return this;
    }

    public rotate(shape: number[][]): void {
        shape = shape.map((row, rowIndex) => {
            return row.map((val, colIndex) => {
                return shape[3 - colIndex][rowIndex];
            });
        });
    }

    public setRotations(shape: number[][]): TetrisBuilder {
        // set 4 rotations for the tetris piece
        // set 4 rotations
        // create a new tetris piece
        this.tetrisComposite.addRotation(this.tetrisComposite.getShape());
        this.rotate(shape);
        this.tetrisComposite.addRotation(this.tetrisComposite.getShape());
        this.rotate(shape);
        this.tetrisComposite.addRotation(this.tetrisComposite.getShape());
        this.rotate(shape);
        this.tetrisComposite.addRotation(this.tetrisComposite.getShape());
        return this;
    }

    getTetrisPiece = (): TetrisComposite => {
        return this.tetrisComposite;
    }
}

// Usage
const builder = new TetrisBuilder();
const tetris = builder.addRow(0, [0, 0, 0, 0, 0])
    .addRow(1, [0, 0, 0, 0, 0])
    .addRow(2, [0, 1, 1, 1, 0])
    .addRow(3, [0, 1, 0, 1, 0])
    .addRow(4, [0, 0, 0, 0, 0])
    .setRotations([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 1, 1, 1, 0], [0, 1, 0, 1, 0], [0, 0, 0, 0, 0]])
    .getTetrisPiece();

const tetrisI = TetrisFactory.createTetris(TetrisType.I);