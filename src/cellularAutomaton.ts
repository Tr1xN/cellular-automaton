import chalk from 'chalk';
import cell from './cell.js';

interface coords {
    x: number;
    y: number;
}

export default class cellularAutomaton {
    protected width: number;
    protected height: number;
    cells: cell[][];

    constructor(width: number = 10, height: number = 10, state: boolean = false) {
        this.width = width;
        this.height = height;
        this.cells = this.init(width, height, state);
    }

    protected init(width: number = this.width, height: number = this.height, state: boolean = false) {
        return new Array(height).fill(null).map(() => new Array(width).fill(null).map(() => new cell(state)));
    }

    updateNeighbors(row: number, col: number, delta: coords[]) {
        delta.map(delta => {
            let x = ((row + delta.x) % this.width + this.width) % this.width;
            let y = ((col + delta.y) % this.height + this.height) % this.height;
            this.cells[x][y].increaseNeighbors(1);
        });
    }

    inverse() {
        this.cells.map(row => row.map(cell => cell.changeState()));
    }

    print(debug: boolean = false) {
        let output = '';
        this.cells.map(row => {
            row.map(cell => {
                if (debug)
                    output += cell.getState() ? chalk.whiteBright.bgGreen(cell.getNeighbors() + ' ') : cell.getNeighbors() + ' ';
                else
                    output += cell.getState() ? chalk.whiteBright.bgGreen('  ') : '  ';
            });
            output += '\n';
        });
        return (output.slice(0, -1));
    }

}