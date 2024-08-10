export const initialState = []

function feedbackReducer(state = initialState, action){
  switch(action.type){
    case "add_feedback": return action.payload
    default: return state
  }
}

export default feedbackReducer;

