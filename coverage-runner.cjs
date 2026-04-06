// coverage-runner.cjs
require('@babel/register')({
  presets: ['@babel/preset-env'],
  plugins: ['istanbul'],
  extensions: ['.js']
});

const Mocha = require('mocha');
const glob = require('glob');

const mocha = new Mocha();

glob.sync('test/**/*.js').forEach(file => {
  mocha.addFile(file);
});

mocha.run(failures => {
  process.exitCode = failures ? 1 : 0;
});