import React, { useState } from 'react';
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
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  console.table("notes", notes)
  console.log("title", title)

  const addNote = (e) => {
    e.preventDefault()
    setNotes([
      ...notes, { title }
    ])
    setTitle('')
  }

  return (
    <div>
      <h1>NoteApp!</h1>
      {notes.map((note) => (
        <div key={note.title}>
          <h4>{note.title}</h4>
        </div>
      ))}
      <p>ADD NOTE</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
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
