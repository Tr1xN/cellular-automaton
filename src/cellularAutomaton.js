import chalk from 'chalk';
import cell from './cell.js';
export default class cellularAutomaton {
    constructor(width = 10, height = 10, state = false) {
        this.width = width;
        this.height = height;
        this.init(width, height, state);
        console.log(this.cells);
    }

    init(width, height, state = false) {
        this.cell = Array(height).fill(null).map(() => Array(width).fill(new cell(state)));
    }

    randomize(probability = 0.5) {
        this.cells.map(row => row.map(cell => cell.setState(Math.random() < probability)));
        // for (let row = 0; row < this.height; row++) {
        //     for (let col = 0; col < this.width; col++) {
        //         this.cells[row][col].setState(Math.random() < probability);
        //     }
        // }
    }

    inverse() {
        this.cells.map(row => row.map(cell => cell.setState(!cell.getState())));
        // for (let row = 0; row < this.height; row++) {
        //     for (let col = 0; col < this.width; col++) {
        //         this.cells[row][col].setState(!this.cells[row][col].getState());
        //     }
        // }
    }

    print(debug) {
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