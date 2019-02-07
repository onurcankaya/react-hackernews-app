import { types } from '../actions'

const initialState = {
  text: 'null',
}

const searchInput = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_INPUT: {
      const { text } = action.payload

      return {
        ...state,
        text,
      }
    }
    default:
      return state
  }
}

export default searchInput
