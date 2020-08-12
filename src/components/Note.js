import React, { useContext } from 'react'
import NotesContext from '../context/notes-context'
import { REMOVE_NOTE } from '../reducers/notes'
import useMousePosition from '../hooks/useMousePosition'


const Note = ({ note }) => {
  const { notesDispatch } = useContext(NotesContext)
  const position = useMousePosition()

  const removeNote = (title) => {
    notesDispatch({
      type: REMOVE_NOTE,
      title: note.title
    })
  }

  return (
    <div className='notes'>
      <h3>Title: {note.title}</h3>
      <p>Body: {note.body}</p>
      <p>{position.x}, {position.y}</p>
      <button onClick={() => removeNote(note.title)}>x</button>
    </div>
  )

}

export { Note as default }
