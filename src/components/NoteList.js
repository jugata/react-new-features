import React, { useContext } from 'react'
import Note from './Note'
import NotesContext from '../context/notes-context'

// the props were passed down from NoteApp.js before context was set up
const NoteList = () => {
  const { notes } = useContext(NotesContext)

  return notes.map((note) => (
    <Note key={note.title} note={note} />
  ))


}

export { NoteList as default }
