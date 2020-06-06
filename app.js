const notes = require('./notes')
const yargs = require('yargs')



//adding notes
yargs.command({
    command: 'add',
    describe: 'adding notes',
    builder: {
        title: {
            describe: 'title of the note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})


//removing notes
yargs.command({
    command: 'remove',
    describe: 'removing notes',
    builder: {
        title: {
            describe: 'removing notes',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removenote(argv.title)
    }
})

yargs.parse()