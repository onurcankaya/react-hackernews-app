import * as React from 'react'

class Login extends React.PureComponent {
  onLoginClick = () => {
    this.props.history.push('/search')
  }

  render() {
    return (
      <div>
        Login Page
        <button onClick={this.onLoginClick}>{`Login`}</button>
      </div>
    )
  }
}

export default Login
