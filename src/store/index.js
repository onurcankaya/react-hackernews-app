import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import rootSaga from './sagas'

const middlewares = []

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger')

  middlewares.push(logger)
}

const sagaMiddleware = createSagaMiddleware()

const store = compose(applyMiddleware(...middlewares, sagaMiddleware))(
  createStore
)(reducers)

sagaMiddleware.run(rootSaga)

export default store
