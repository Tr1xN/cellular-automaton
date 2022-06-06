import chalk from 'chalk';
import cell from './cell.js';

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

    inverse() {
        this.cells.map(row => row.map(cell => cell.changeState()));
        // for (let row = 0; row < this.height; row++) {
        //     for (let col = 0; col < this.width; col++) {
        //         this.cells[row][col].setState(!this.cells[row][col].getState());
        //     }
        // }
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