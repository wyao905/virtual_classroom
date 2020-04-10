import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    students: studentsReducer,
    instructors: instructorsReducer,
    enrollments: enrollmentsReducer,
    lectures: lecturesReducer,
    messages: messagesReducer,
    subjects: subjectsReducer,
    currentUser: currentUserReducer,
    currentSubject: currentSubjectReducer,
    currentLecture: currentLectureReducer,
    classSession: classSessionReducer,
    classLecture: classLectureReducer,
    loading: loadingReducer
})

export default rootReducer

function studentsReducer(state = [], action) {
  let idx
  switch(action.type) {
    case "ADD_STUDENTS":
      return [...action.students]

    case "ADD_STUDENT":
      return [...state, action.student]

    case "REMOVE_STUDENT":
      idx = state.findIndex(student => student.id === action.id)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]

    default:
      return state
  }
}

function instructorsReducer(state = [], action) {
  let idx
  switch(action.type) {
    case "ADD_INSTRUCTORS":
      return [...action.instructors]

    case "ADD_INSTRUCTOR":
      return [...state, action.instructor]
   
    case "REMOVE_INSTRUCTOR":
      idx = state.findIndex(instructor => instructor.id === action.id)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]
   
    default:
      return state
  }
}

function enrollmentsReducer(state = [], action) {
  let idx
  switch(action.type) {
    case "ADD_ENROLLMENT":
      return [...state, action.enrollment]
   
    case "REMOVE_ENROLLMENT":
      idx = state.findIndex(enrollment => enrollment.id === action.id)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]
   
    default:
      return state
  }
}

function lecturesReducer(state = [], action) {
  let idx
  switch(action.type) {
    case "ADD_LECTURE":
      for(let i = 0; i < state.length; i++) {
        if(state[i].id === action.lecture.id) {
          return state
        }
      }
      return [...state, action.lecture]
   
    case "REMOVE_LECTURE":
      idx = state.findIndex(lecture => lecture.id === action.id)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]
   
    default:
      return state
  }
}

function messagesReducer(state = [], action) {
  let idx
  switch(action.type) {
    case "ADD_MESSAGES":
      return [].concat(action.messages)
   
    case "REMOVE_MESSAGE":
      idx = state.findIndex(message => message.id === action.id)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]
   
    default:
      return state
  }
}

function subjectsReducer(state = [], action) {
  let idx
  switch(action.type) {
    case "ADD_SUBJECTS":
      return [].concat(action.subjects)

    case "ADD_SUBJECT":
      return [...state, action.subject]
   
    case "REMOVE_SUBJECT":
      idx = state.findIndex(subject => subject.id === action.id)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]
   
    default:
      return state
  }
}

function currentUserReducer(state = {}, action) {
  switch(action.type) {
    case "LOGIN":
      return action.user

    case "LOGOUT":
      return {}

    default:
      return state
  }
}

function currentSubjectReducer(state = {}, action) {
  switch(action.type) {
    case "SET_CURRENT_SUBJECT":
      return action.subject

    default:
      return state
  }
}

function currentLectureReducer(state = "", action) {
  switch(action.type) {
    case "DISPLAY_LECTURE_CONTENT":
      return action.id
    
    case "CLEAR_LECTURE_CONTENT":
      return action.id

    default:
      return state
  }
}

function classSessionReducer(state = false, action) {
  switch(action.type) {
    case "START_CLASS":
      return true

    case "END_CLASS":
      return false

    default:
      return state
  }
}

function classLectureReducer(state = {}, action) {
  switch(action.type) {
    case "START_CLASS":
      return action.lecture

    case "END_CLASS":
      return {}

    default:
      return state
  }
}

function loadingReducer(state = false, action) {
  switch(action.type) {
    case "LOADING":
      return true
    
    case "LOADING_DONE":
      return false

    default:
      return state
  }
}