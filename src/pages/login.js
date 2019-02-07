import * as React from 'react'

class Login extends React.PureComponent {
  onLoginClick = () => {
    this.props.history.push('/search')
  }

  render() {
    return (
      <div>
        <button onClick={this.onLoginClick}>{`Login`}</button>
      </div>
    )
  }
}

export default Login
