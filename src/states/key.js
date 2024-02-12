
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
    
     
      return {
        ...state, 
        selectedMile: {...state.mile.find((m) => m.id == action.payload)}

      }
     case 'SET_EDIT':
      
      return {...state,
        mile:state.mile.map((i)=> i.id !== action.payload.id ? i :
      action.payload )  
    } 
      
    

    default: return state
  }
}

export default key