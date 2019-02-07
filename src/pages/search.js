import * as React from 'react'
import { connect } from 'react-redux'

import * as actions from '../store/actions'
import * as selectors from '../store/selectors'

class Search extends React.PureComponent {
  onSearchSubmit = (e) => {
    e.preventDefault()
    const { query } = this.props
    this.props.dispatch(actions.getSearchResults({ query }))
  }

  onSearchTextChange = (e) => {
    const query = e.target.value
    this.props.dispatch(actions.setSearchQuery({ query }))
  }

  render() {
    const { results } = this.props
    console.log(results)
    if (!results) return null

    return (
      <div>
        <form onSubmit={this.onSearchSubmit}>
          <input type="text" onChange={this.onSearchTextChange} />
          <button>{`Search`}</button>
        </form>
        {this.props.results.map((result, index) => (
          <div key={index}>{result.title}</div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  query: selectors.getSearchQuery(state),
  results: selectors.getSearchResults(state),
})

export default connect(mapStateToProps)(Search)
