import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Navigation from '../routes'

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </div>
    )
  }
}

export default App
