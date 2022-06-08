import chalk from 'chalk';
import cell from './cell.js';
export default class cellularAutomaton {
    width;
    height;
    cells;
    constructor(width = 10, height = 10, state = false) {
        this.width = width;
        this.height = height;
        this.cells = this.init(width, height, state);
    }
    init(width = this.width, height = this.height, state = false) {
        return new Array(height).fill(null).map(() => new Array(width).fill(null).map(() => new cell(state)));
    }
    updateNeighbors(row, col, delta) {
        delta.map(delta => {
            let x = ((row + delta.x) % this.width + this.width) % this.width;
            let y = ((col + delta.y) % this.height + this.height) % this.height;
            this.cells[y][x].increaseNeighbors(1);
        });
    }
    inverse() {
        this.cells.map(row => row.map(cell => cell.changeState()));
    }
    print(debug = false) {
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
