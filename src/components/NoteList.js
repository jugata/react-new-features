import React from 'react'
import Note from './Note'

// the props are passed down from NoteApp.js
const NoteList = ({ notes, removeNote }) => {

  return notes.map((note) => (
    <Note key={note.title} note={note} removeNote={removeNote} />
  ))


}

export { NoteList as default }
