import { sync as glob_sync } from 'glob';
import { join } from 'path';

console.log('Run server-side test');

const _root = process.cwd();
let files = glob_sync(join(_root, '/out-tsc/**/*.spec.js'));
files.forEach(file => {
  require(file);
});