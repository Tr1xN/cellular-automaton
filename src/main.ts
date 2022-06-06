import gameOfLife from './gameOfLife.js';
import logUpdate from 'log-update';
import boxen from 'boxen';

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

let world = new gameOfLife(10, 10);

// world.cells[2][1].setState(true);
// world.cells[2][2].setState(true);
// world.cells[2][3].setState(true);
// world.cells[1][3].setState(true);
// world.cells[0][2].setState(true);

world.randomize(0.5);

logUpdate(boxen(world.print(true), {borderColor: 'green'}));
await sleep(1000);
world.step();
logUpdate(boxen(world.print(true), {borderColor: 'green'}));

// setInterval(() => {
// 	logUpdate(boxen(world.print(true), {borderColor: 'green'}));
//     world.step();
// }, 1000/1);