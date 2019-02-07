import axios from 'axios'
import { all, put, takeEvery, call } from 'redux-saga/effects'

import * as actions from './actions'

const HN_BASE_URL = 'https://hn.algolia.com/api/v1/search?query='

export const getSearchResults = (query) => axios(`${HN_BASE_URL}${query}`)

function* handleGetSearchResults(action) {
  try {
    const { query } = action.payload
    const result = yield call(getSearchResults, query)

    console.log(result.data.hits)

    yield put(actions.getSearchResultsSuccess({ results: result.data.hits }))
  } catch ({ error }) {
    yield put(actions.getSearchResultsError({ error }))
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.types.GET_SEARCH_RESULTS, handleGetSearchResults),
  ])
}
