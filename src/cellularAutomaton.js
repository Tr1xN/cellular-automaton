import chalk from 'chalk';
export default class cellularAutomaton {
    constructor(width = 20, height = 10) {
        this.width = width;
        this.height = height;
        this.init(width, height);
    }

    init(width, height) {
        this.cells = Array(height).fill(null).map(() => Array(width).fill(false));
    }

    fill(state = false){
        for (let row in this.cells) {
            for (let col in this.cells[row]) {
                this.cells[row][col] = state;
            }
        }
    }

    randomize(frequency) {
        this.fill()
        for (let row in this.cells) {
            for (let col in this.cells[row]) {
                if (Math.random() < frequency)
                    this.cells[row][col] = !this.cells[row][col];
            }
        }
    }

    inverse() {
        for (let row in this.cells) {
            for (let col in this.cells[row]) {
                this.cells[row][col] = !this.cells[row][col];
            }
        }
    }

    print(debug) {
        let output = '';
        for (let row in this.cells) {
            for (let col in this.cells[row]) {
                if(debug)                
                    output += this.cells[row][col] ? chalk.whiteBright.bgGreen(this.countNeighbors(row, col)+' ') : this.countNeighbors(row, col)+' ';
                else
                    output += this.cells[row][col] ? chalk.whiteBright.bgGreen('  ') : '  ';
            }
            output += '\n';
        }
        return(output.slice(0, -1));
    }

    countNeighbors(row, col) {
        let count = 0;
        for (let i = row - 1; i <= row + 1; i++) {
            for (let j = col - 1; j <= col + 1; j++) {
                if (i >= 0 && i < this.height && j >= 0 && j < this.width && !(i == row && j == col) && this.cells[i][j]) {
                    count++;
                }
            }
        }
        return(count);
    }
}

