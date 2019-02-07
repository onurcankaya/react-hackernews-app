import * as React from 'react'
import { connect } from 'react-redux'

import * as actions from '../store/actions'
import * as selectors from '../store/selectors'

class Search extends React.PureComponent {
  onSearchSubmit = (e) => {
    e.preventDefault()
    console.log(this.props.searchText)
  }

  onSearchTextChange = (e) => {
    const text = e.target.value
    this.props.dispatch(actions.setSearchInput({ text }))
  }

  render() {
    console.log(this.props.searchText)

    return (
      <div>
        <form onSubmit={this.onSearchSubmit}>
          <input type="text" onChange={this.onSearchTextChange} />
          <button>Search</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  searchText: selectors.getSearchInput(state),
})

export default connect(mapStateToProps)(Search)
