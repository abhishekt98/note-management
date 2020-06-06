const fs = require('fs')
const chalk = require('chalk')
    //function for adding the notes
const addNote = function(title, body) {
        const notes = loadnotes()
        const duplicate = notes.filter(function(note) {
                return note.title === title
            })
            // console.log(duplicate)
        debugger
        if (duplicate.length === 0) {
            notes.push({
                    title: title,
                    body: body
                })
                //console.log(notes)
            const jsonnote = JSON.stringify(notes)
            fs.writeFileSync('notes.json', jsonnote)
            console.log(chalk.green.inverse('note added'))
        } else {
            console.log(chalk.red.inverse('name already exist'))
        }

    }
    //loading notes

const loadnotes = function() {
        try {
            const databuffer = fs.readFileSync('notes.json')
            const JSONdata = databuffer.toString()
            const parseddata = JSON.parse(JSONdata)
            return parseddata
        } catch (e) {
            return []

        }
    }
    //removing notes
const removenote = function(title) {
    const notes = loadnotes()
    const newdata = notes.filter(function(note) {
        return note.title !== title
    })
    if (notes.length !== newdata.length) {
        console.log(chalk.red.inverse("note deleted"))
    } else {
        console.log(chalk.blue.inverse("note not there!!"))
    }
    const jsonnote = JSON.stringify(newdata)
    fs.writeFileSync('notes.json', jsonnote)

}

module.exports = {
    addNote,
    removenote

}