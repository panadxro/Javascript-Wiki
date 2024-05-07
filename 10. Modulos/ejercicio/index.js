// entrypoint
// Import ES6 - modulo matematico 
import { multiplica , suma} from './modules/controller.js';
// Import Chalk
import chalk from 'chalk';

const sum1 = suma(1, 2);
const sum2 = suma(4, 5);

const mul = multiplica(sum1, sum2);
console.log(chalk.green(mul));