import gameOfLife from './gameOfLife.js';
import boxen from 'boxen';
let world = new gameOfLife(10, 10);
// world.cells[2][1].setState(true);
// world.cells[2][2].setState(true);
// world.cells[2][3].setState(true);
// world.cells[1][3].setState(true);
// world.cells[0][2].setState(true);
world.randomize(0.5);
console.log(boxen(world.print(true), { borderColor: 'green' }));
world.step();
console.log(boxen(world.print(true), { borderColor: 'green' }));
world.step();
world.step();
console.log(boxen(world.print(true), { borderColor: 'green' }));
// setInterval(() => {
// 	logUpdate(boxen(world.print(true), {borderColor: 'green'}));
//     world.step();
// }, 1000/1);
