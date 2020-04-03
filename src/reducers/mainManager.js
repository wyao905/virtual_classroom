import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    students: studentsReducer,
    instructors: instructorsReducer,
    enrollments: enrollmentsReducer,
    lectures: lecturesReducer,
    messages: messagesReducer,
    subjects: subjectsReducer
})

export default rootReducer

function studentsReducer(state = [], action) {
    let idx;
    switch (action.type) {
      case "ADD_STUDENT":
        return [...state, action.student];
   
      case "REMOVE_STUDENT":
        idx = state.findIndex(student => student.id === action.id)
        return [...state.slice(0, idx), ...state.slice(idx + 1)];
   
      default:
        return state;
    }
}