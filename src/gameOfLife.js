import cellularAutomaton from './cellularAutomaton.js';

export default class gameOfLife extends cellularAutomaton {
    constructor(width = 10, height = 10, state = false){
        super(width, height, state);
        this.width = width;
        this.height = height;
        this.init(width, height, state);
        this.delta = [{x: -1, y: -1}, {x: -1, y: 0}, {x: -1, y: 1}, {x: 0, y: -1}, {x: 0, y: 1}, {x: 1, y: -1}, {x: 1, y: 0}, {x: 1, y: 1}];
    }

    step(){
        let old = this.cells;
        this.init();
        old.map((row, rowIndex) => {
            row.map((cell, colIndex) => {
                let neighbors = cell.getNeighbors();
                if (cell.getState()) {
                    if (neighbors < 2 || neighbors > 3){
                        this.cells[rowIndex][colIndex].setState(false);
                        this.delta.map(delta => {
                            let x = (rowIndex + delta.x)%this.width + (this.width + (rowIndex + delta.x))%this.width;; 
                            let y = (colIndex + delta.y)%this.height + (this.height + (colIndex + delta.y))%this.height;
                            this.cells[x][y].decreaseNeighbors(1);
                        });
                    }
                }
                else {
                    if (neighbors === 3){
                        this.cells[rowIndex][colIndex].setState(true);
                        this.delta.map(delta => {
                            let x = (rowIndex + delta.x)%this.width + (this.width + (rowIndex + delta.x))%this.width;; 
                            let y = (colIndex + delta.y)%this.height + (this.height + (colIndex + delta.y))%this.height;
                            this.cells[x][y].increaseNeighbors(1);
                        });
                    }
                }
            });
        });
        // for (let row = 0; row < this.height; row++) {
        //     for (let col = 0; col < this.width; col++) {
        //         let neighbors = this.countNeighbors(row, col);
        //         if (old[row][col].getState()) {
        //             if (neighbors < 2 || neighbors > 3)
        //                 this.cells[row][col].setState(false);
        //             else
        //                 this.cells[row][col].setState(true);
        //         } else {
        //             if (neighbors === 3)
        //                 this.cells[row][col].setState(true);
        //         }
        //     }
        // }
    }
}