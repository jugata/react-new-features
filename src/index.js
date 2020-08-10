import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//wrong way
// const App = (props) => {
//   // const [count, setCount] = useState(props.count)
//   // const [text, setText] = useState('')
//   const [state, setState] = useState({
//     count: props.count,
//     text: ''
//   })

//   const reset = () => {
//     setState({ count: props.count })
//   }
//   return (
//     <div>
//       <p>The current {state.text || 'count'} is {state.count}</p>
//       <button onClick={() => setState({ count: state.count + 1 })}> + 1</button>
//       <button onClick={() => setState({ count: state.count - 1 })}> - 1</button>
//       <button onClick={reset}>reset</button>
//       <input value={state.text} onChange={(e) => setState({ text: e.target.value })}></input>
//     </div>
//   )
// }


// const App = (props) => {
//   const [count, setCount] = useState(props.count)
//   const [text, setText] = useState('')
//   console.log("this is props", props)
//   //use state returns state, and a function to call to update state.
//   // const increment = () => {
//   //   setCount(count + 1)
//   // }
//   useEffect(() => {
//     document.title = count
//   })

//   const reset = () => {
//     setCount(props.count)
//   }
//   return (
//     <div>
//       <p>The current {text || 'count'} is {count}</p>
//       <button onClick={() => setCount(count + 1)}> + 1</button>
//       <button onClick={() => setCount(count - 1)}> - 1</button>
//       <button onClick={reset}>reset</button>
//       <input value={text} onChange={(e) => setText(e.target.value)}></input>
//     </div>
//   )
// }

// App.defaultProps = {
//   count: 0
// }

const NoteApp = () => {
  const notesData = JSON.parse(localStorage.getItem('notes'))
  const [notes, setNotes] = useState(notesData || [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')


  const addNote = (e) => {
    e.preventDefault()
    setNotes([
      ...notes, { title, body }
    ])
    setTitle('')
    setBody('')
  }
  const removeNote = (title) => {
    setNotes(notes.filter((note) => note.title !== title))
  }

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  })
  return (
    <div>
      <h1>NoteApp!</h1>
      {notes.map((note) => (
        <div key={note.title}>
          <h3>Title: {note.title}</h3>
          <p>Body: {note.body}</p>
          <button onClick={() => removeNote(note.title)}>x</button>
        </div>
      ))}
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
ReactDOM.render(
  <React.StrictMode>
    <NoteApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
