import cellularAutomaton from './cellularAutomaton.js';

export default class gameOfLife extends cellularAutomaton{
    step() {
        let newCells = Array(this.height).fill(null).map(() => Array(this.width).fill(false));
        for (let row in this.cells) {
            for (let col in this.cells[row]) {
                let count = this.countNeighbors(row, col);
                if (this.cells[row][col]) {
                    if (count < 2 || count > 3)
                        newCells[row][col] = false;
                    else
                        newCells[row][col] = true;
                } else {
                    if (count == 3)
                        newCells[row][col] = true;
                    else
                        newCells[row][col] = false;
                }
            }
        }
        this.cells = newCells;
    }
}