export const types = {
  /* SEARCH */
  SET_SEARCH_INPUT: 'SET_SEARCH_INPUT',
  GET_SEARCH_RESULTS: 'GET_SEARCH_RESULTS',
}

export const setSearchInput = ({ text }) => ({
  type: types.SET_SEARCH_INPUT,
  payload: { text },
})
