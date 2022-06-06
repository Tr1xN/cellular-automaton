import gameOfLife from './gameOfLife.js';
import logUpdate from 'log-update';
import boxen from 'boxen';

let world = new gameOfLife(20, 20);

world.setMap([[0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0],
              [0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0],
              [1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0],
              [0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0],
              [0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0],
              [0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
              [0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
              [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0],
              [1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]);


logUpdate(boxen(world.print(true), {borderColor: 'green'}));

setInterval(() => {
    world.step();
	logUpdate(boxen(world.print(), {borderColor: 'green'}));
}, 1000/60);