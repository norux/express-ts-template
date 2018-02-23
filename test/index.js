const glob = require('glob');
const path = require('path');

const _root = process.cwd();
let files = glob.sync(path.join(_root, '/out-tsc/**/*.spec.js'));
files.forEach(file => {
  require(file);
});