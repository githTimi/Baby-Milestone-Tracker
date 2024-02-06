
import 'react-native-get-random-values'
import { nanoid } from 'nanoid'

const initialState = {
  mile: [],
  selectedMile: [],
}

function key(state = initialState, action) {
  switch (action.type) {
    case 'ADD_MILE':

      return {
        ...state, mile: [...state.mile, {
          id: nanoid(),
          time: action.payload.time,
          title: action.payload.title,
          description: action.payload.description
        }]
      }
    case 'SET_ID':
    
      const newObj = state.mile.find((m) => m.id == action.payload)
      return {
        ...state, mile: [...state.mile],
        selectedMile: [...state.selectedMile, newObj]

      }
     /*case 'SET_EMPTY':
      const filteredData = state.selectedMile.filter(s => s.id !== action.payload)
      return {
        ...state,
        selectedMile: filteredData
      }   */
    default: return state
  }
}

export default key