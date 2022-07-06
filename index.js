import chalk from 'chalk';
import { suma, multiplica } from './controller.js';

console.log(chalk.green.inverse(suma(1, 2), multiplica(4, 5)));
