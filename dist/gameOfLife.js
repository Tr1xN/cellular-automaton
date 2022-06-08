import cellularAutomaton from './cellularAutomaton.js';
export default class gameOfLife extends cellularAutomaton {
    delta;
    constructor(width = 10, height = 10, state = false) {
        super(width, height, state);
        this.delta = [{ x: -1, y: -1 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: -1 }, { x: 0, y: 1 }, { x: 1, y: -1 }, { x: 1, y: 0 }, { x: 1, y: 1 }];
    }
    setCellState(row, col, state) {
        this.cells[row][col].setState(state);
        this.updateNeighbors(row, col, this.delta);
    }
    setPattern(pattern) {
        let maxPatternWidth = 0;
        let maxPatternHeight = pattern.length;
        for (let row = 0; row < maxPatternHeight; row++) {
            if (pattern[row].length > maxPatternWidth)
                maxPatternWidth = pattern[row].length;
        }
        if (maxPatternHeight == 0 || maxPatternWidth == 0) {
            throw new Error('Pattern is empty');
        }
        if (maxPatternHeight > this.height || maxPatternWidth > this.width) {
            this.cells = this.init(maxPatternWidth, maxPatternHeight, false);
        }
        for (let row = 0; row < maxPatternHeight; row++) {
            for (let col = 0; col < maxPatternWidth; col++) {
                if (pattern[row][col] == 1)
                    this.setCellState(row, col, true);
            }
        }
    }
    step() {
        let oldCells = this.cells;
        this.cells = this.init(this.width, this.height, false);
        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < this.width; col++) {
                if (oldCells[row][col].getState() && oldCells[row][col].getNeighbors() == 0) {
                    continue;
                }
                let aliveNeighbors = oldCells[row][col].getNeighbors();
                if ((!oldCells[row][col].getState() && aliveNeighbors == 3) || (oldCells[row][col].getState() && (aliveNeighbors == 2 || aliveNeighbors == 3))) {
                    this.setCellState(row, col, true);
                }
            }
        }
    }
    randomize(probability = 0.5) {
        this.cells.map((row, rowIndex) => {
            row.map((cell, colIndex) => {
                if (Math.random() < probability) {
                    this.cells[rowIndex][colIndex].changeState();
                    this.delta.map(delta => {
                        let x = ((rowIndex + delta.x) % this.width + this.width) % this.width;
                        let y = ((colIndex + delta.y) % this.height + this.height) % this.height;
                        this.cells[y][x].increaseNeighbors(1);
                    });
                }
            });
        });
    }
}
