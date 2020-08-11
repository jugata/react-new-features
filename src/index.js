import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// import { notesReducer, POPULATE_NOTES, ADD_NOTE, REMOVE_NOTE } from './reducers/notes'
// import Note from './components/Note'
import NoteApp from './components/NoteApp'
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

//   //use state returns state, and a function to call to update state.
//   // const increment = () => {
//   //   setCount(count + 1)
//   // }
//   useEffect(() => {
//     console.log("run once")
//   }, [])

//   useEffect(() => {
//     console.log('useEffect ran')
//     document.title = count
//   }, [count])

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
