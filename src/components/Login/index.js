import {Component} from 'react'
import Cookies from 'js-cookie'

import {
  LoginFormContainer,
  NxtWatchImage,
  ImageContainer,
  LoginContainer,
  LabelForUsername,
  InputUsername,
  LabelForPassword,
  ShowPassword,
  InputCheckbox,
  LoginButton,
  ButtonContainer,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    // console.log(Cookies.get('jwt_token'))
    // console.log(this.props)
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  renderUsername = () => (
    <LabelForUsername>
      USERNAME
      <InputUsername
        onChange={this.onChangeUsername}
        type="text"
        placeholder="Username"
      />
    </LabelForUsername>
  )

  renderPassword = () => {
    const {showPassword} = this.state
    return (
      <LabelForPassword>
        PASSWORD
        <InputUsername
          onChange={this.onChangePassword}
          type={showPassword ? 'text' : 'password'}
          onClick={this.toggleShowPassword}
          placeholder="Password"
        />
      </LabelForPassword>
    )
  }

  toggleShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  renderShowPassword = () => (
    <ShowPassword>
      <InputCheckbox type="checkbox" onClick={this.toggleShowPassword} />
      Show Password
    </ShowPassword>
  )

  render() {
    const {errorMsg, showSubmitError} = this.state

    return (
      <LoginFormContainer>
        <LoginContainer>
          <ImageContainer>
            <NxtWatchImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="logo"
            />
          </ImageContainer>
          <form onSubmit={this.submitForm}>
            {this.renderUsername()}
            {this.renderPassword()}
            {this.renderShowPassword()}
            <ButtonContainer>
              <LoginButton type="submit">Login</LoginButton>
            </ButtonContainer>
          </form>
          <ErrorMessage>{showSubmitError ? `*${errorMsg}` : ''}</ErrorMessage>
        </LoginContainer>
      </LoginFormContainer>
    )
  }
}

export default Login
