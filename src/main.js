import cellularAutomaton from './cellularAutomaton.js';
import gameOfLife from './gameOfLife.js';
import logUpdate from 'log-update';
import boxen from 'boxen';

let world = new gameOfLife(10, 10);


// world.cells[3][1].setState(true);
// world.cells[3][2].setState(true);
// world.cells[3][3].setState(true);
// world.cells[2][3].setState(true);
// world.cells[1][2].setState(true);

logUpdate(boxen(world.print(), {borderColor: 'green'}));

setInterval(() => {
	logUpdate(boxen(world.print(), {borderColor: 'green'}));
    world.step();
}, 1000/120);