import React, { useEffect, useReducer } from 'react'
import { notesReducer, POPULATE_NOTES } from '../reducers/notes'
import NoteList from './NoteList'
import AddNoteForm from './AddNoteForm'
import NotesContext from '../context/notes-context'

const NoteApp = () => {
  // const [notes, setNotes] = useState([])
  //userReducer returns an array with [state, dispatch function]
  const [notes, notesDispatch] = useReducer(notesReducer, [])


  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem('notes'))
    if (notesData) {
      //setNotes(notesData)
      notesDispatch({ type: POPULATE_NOTES, notes: notesData })
    }
  }, [])

  // const removeNote = (title) => {
  //   // setNotes(notes.filter((note) => note.title !== title))
  //   notesDispatch({
  //     type: REMOVE_NOTE,
  //     title
  //   })
  // }

  useEffect(() => {
    console.log('storing')
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])
  return (
    <NotesContext.Provider value={{ notes, notesDispatch }}>
      <h1>NoteApp!</h1>
      <NoteList />
      <AddNoteForm notesDispatch={notesDispatch} />
    </NotesContext.Provider>
  )
}

export { NoteApp as default }
