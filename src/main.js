import cellularAutomaton from './cellularAutomaton.js';
import gameOfLife from './gameOfLife.js';
import logUpdate from 'log-update';
import boxen from 'boxen';

let world1 = new gameOfLife(5, 5);


world1.cells[2][2] = true;
world1.cells[2][3] = true;
world1.cells[2][4] = true;

setInterval(() => {
    world1.fill(true);
	logUpdate(`${boxen(world1.print(true), {borderColor: 'green', borderStyle: 'round'})}\n${world1.countNeighbors(0,1)}\n${world1.cells[0][1]}`);
}, 1000/5);

// setInterval(() => {
// 	logUpdate(`${boxen(world1.print({debug: true}), {borderColor: 'green', borderStyle: 'round'})}\n${world1.countNeighbors(0,1)}\n${world1.cells[0][1]}`);
//     world1.step();
// }, 100);