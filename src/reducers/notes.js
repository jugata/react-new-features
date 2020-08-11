const POPULATE_NOTES = 'POPULATE_NOTES'
const ADD_NOTE = "ADD_NOTE"
const REMOVE_NOTE = "REMOVE_NOTE"

const notesReducer = (state, action) => {
  switch (action.type) {
    case POPULATE_NOTES:
      return action.notes
    case ADD_NOTE:
      return [...state, { title: action.title, body: action.body }]
    case REMOVE_NOTE:
      return state.filter(note => note.title !== action.title)
    default:
      return state
  }

}
export { notesReducer, POPULATE_NOTES, ADD_NOTE, REMOVE_NOTE }
