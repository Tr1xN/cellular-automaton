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
    inverse() {
        this.cells.map(row => row.map(cell => cell.changeState()));
        // for (let row = 0; row < this.height; row++) {
        //     for (let col = 0; col < this.width; col++) {
        //         this.cells[row][col].setState(!this.cells[row][col].getState());
        //     }
        // }
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
        // for (let row = 0; row < this.height; row++) {
        //     for (let col = 0; col < this.width; col++) {
        //         if (debug)
        //             output += this.cells[row][col] ? chalk.whiteBright.bgGreen(this.countNeighbors(row, col) + ' ') : this.countNeighbors(row, col) + ' ';
        //         else
        //             output += this.cells[row][col] ? chalk.whiteBright.bgGreen('  ') : '  ';
        //     }
        //     output += '\n';
        // }
        return (output.slice(0, -1));
    }
}
