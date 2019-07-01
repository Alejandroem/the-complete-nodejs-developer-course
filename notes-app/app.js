const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

/*
const command = process.argv[2];

if(command === 'add'){
    console.log('Adding note!');
} else if (command === 'remove'){
    console.log('Removing note!');
}
*/

//Customize yargs version
yargs.version('1.1.0');

console.log(yargs.argv);
