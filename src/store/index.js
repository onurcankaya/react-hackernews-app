import { createStore, applyMiddleware, compose } from 'redux'

import reducers from './reducers'

const middlewares = []

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger')

  middlewares.push(logger)
}

const store = compose(applyMiddleware(...middlewares))(createStore)(reducers)

export default store
