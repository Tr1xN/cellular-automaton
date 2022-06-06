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

    setCellState(row: number, col: number, state: boolean) {
        this.cells[row][col].setState(state);
        this.updateNeighbors(row, col, this.delta);
    }

    setMap(map: number[][]) {
        if (map.length != this.height || map[0].length != this.width) {
            throw new Error(`Map size does not match. Expected ${this.width}x${this.height}, got ${map.length}x${map[0].length}`);
        }
        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < this.width; col++) {
                if (map[row][col] == 1)
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