import React from 'react'



const Note = ({ note, removeNote }) => {


  return (
    <div className='notes'>
      <h3>Title: {note.title}</h3>
      <p>Body: {note.body}</p>
      <button onClick={() => removeNote(note.title)}>x</button>
    </div>


  )

}

export { Note as default }
