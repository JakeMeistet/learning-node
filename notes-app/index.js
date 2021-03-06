const chalk = require('chalk')
const notes = require('./notes.js');
const yargs = require('yargs')

yargs.version('1.0.1')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe:'Note body',
            demandOption: true,
            type: 'string',
        },
    },
    handler (argv) {notes.addNote(argv.title, argv.body)},
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler (argv) {notes.removeNote(argv.title)},
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {notes.readNote(argv.title)},
})

yargs.command({
    command: 'list',
    describe: 'List of notes',
    handler () {notes.listNote()},
})

yargs.parse()
