import cellularAutomaton from './cellularAutomaton.js';

interface coords {
    x: number;
    y: number;
}

export default class gameOfLife extends cellularAutomaton {
    delta: coords[];

    constructor(width: number = 10, height: number = 10, state: boolean = false) {
        super(width, height, state);
        this.delta = [{ x: -1, y: -1 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: -1 }, { x: 0, y: 1 }, { x: 1, y: -1 }, { x: 1, y: 0 }, { x: 1, y: 1 }];
    }

    step() {
        let old = this.cells;
        this.cells = this.init();
        old.map((row, rowIndex) => {
            row.map((cell, colIndex) => {
                let neighbors = cell.getNeighbors();
                if (cell.getState()) {
                    if (neighbors < 2 || neighbors > 3) {
                        this.cells[rowIndex][colIndex].setState(false);
                        this.delta.map(delta => {
                            let x = ((rowIndex + delta.x) % this.width + this.width) % this.width;
                            let y = ((colIndex + delta.y) % this.height + this.height) % this.height;
                            this.cells[x][y].decreaseNeighbors(1);
                        });
                    }
                }
                else {
                    if (neighbors === 3) {
                        this.cells[rowIndex][colIndex].setState(true);
                        this.delta.map(delta => {
                            let x = ((rowIndex + delta.x) % this.width + this.width) % this.width;
                            let y = ((colIndex + delta.y) % this.height + this.height) % this.height;
                            this.cells[x][y].increaseNeighbors(1);
                        });
                    }
                }
            });
        });
        // for (let row = 0; row < this.height; row++) {
        //     for (let col = 0; col < this.width; col++) {
        //         let neighbors = this.countNeighbors(row, col);
        //         if (old[row][col].getState()) {
        //             if (neighbors < 2 || neighbors > 3)
        //                 this.cells[row][col].setState(false);
        //             else
        //                 this.cells[row][col].setState(true);
        //         } else {
        //             if (neighbors === 3)
        //                 this.cells[row][col].setState(true);
        //         }
        //     }
        // }
    }

    randomize(probability = 0.5) {
        // this.cells.map(row => row.map(cell => cell.setState(Math.random() < probability)));

        // for (let row = 0; row < this.height; row++) {
        //     for (let col = 0; col < this.width; col++) {
        //         this.cells[row][col].setState(Math.random() < probability);
        //     }
        // }

        this.cells.map((row, rowIndex) => {
            row.map((cell, colIndex) => {
                if (Math.random() < probability) {
                    this.cells[rowIndex][colIndex].changeState();
                    this.delta.map(delta => {
                        let x = ((rowIndex + delta.x) % this.width + this.width) % this.width;
                        let y = ((colIndex + delta.y) % this.height + this.height) % this.height;
                        this.cells[x][y].increaseNeighbors(1);
                    });
                }
            });
        });
    }
}