import cellularAutomaton from './cellularAutomaton.js';
export default class gameOfLife extends cellularAutomaton {
    delta;
    constructor(width = 10, height = 10, state = false) {
        super(width, height, state);
        this.delta = [{ x: -1, y: -1 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: -1 }, { x: 0, y: 1 }, { x: 1, y: -1 }, { x: 1, y: 0 }, { x: 1, y: 1 }];
    }
    step() {
        let newCells = this.init(this.width, this.height, false);
        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < this.width; col++) {
                let aliveNeighbors = this.cells[row][col].getNeighbors();
                if (this.cells[row][col]) {
                    if (aliveNeighbors < 2 || aliveNeighbors > 3) {
                        newCells[row][col].setState(false);
                        this.updateNeighbors(row, col, this.delta);
                    }
                    else
                        newCells[row][col].setState(true);
                }
                else {
                    if (aliveNeighbors == 3) {
                        newCells[row][col].setState(true);
                        this.updateNeighbors(row, col, this.delta);
                    }
                    else
                        newCells[row][col].setState(false);
                }
            }
        }
        this.cells = newCells;
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
