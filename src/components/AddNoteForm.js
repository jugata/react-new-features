import React, { useState } from 'react'
import { ADD_NOTE } from '../reducers/notes'




const AddNoteForm = ({ notesDispatch }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNote = (e) => {
    e.preventDefault()
    notesDispatch({ type: ADD_NOTE, title, body })
    // setNotes([
    //   ...notes, { title, body }
    // ])
    setTitle('')
    setBody('')
  }

  return (

    <div>
      <p>ADD NOTE</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea name="body" cols="30" rows="5"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button >ADD NOTE</button>
      </form>
    </div>
  )
}

export { AddNoteForm as default }
