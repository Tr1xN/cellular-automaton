import gameOfLife from './gameOfLife.js';
import logUpdate from 'log-update';
import boxen from 'boxen';
let world = new gameOfLife(41, 40);
// world.setPattern(schemes['3']);
world.randomize(0.5);
logUpdate(boxen(world.print(true), { borderColor: 'green' }));
setInterval(() => {
    world.step();
    logUpdate(boxen(world.print(), { borderColor: 'green' }));
}, 1000 / 15);
