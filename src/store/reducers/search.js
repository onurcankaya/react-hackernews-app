import { types } from '../actions'

const initialState = {
  query: null,
  results: [],
  error: null,
}

const searchInput = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_QUERY: {
      const { query } = action.payload

      return {
        ...state,
        query,
      }
    }
    case types.GET_SEARCH_RESULTS: {
      const { query } = action.payload

      return {
        ...state,
        query,
      }
    }
    case types.GET_SEARCH_RESULTS_SUCCESS: {
      const { results } = action.payload

      return {
        ...state,
        results,
      }
    }
    case types.GET_SEARCH_RESULTS_ERROR: {
      const { error } = action.payload

      return {
        ...state,
        error,
      }
    }
    default:
      return state
  }
}

export default searchInput
