import {Component} from 'react'

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
    errorMessageFromApi: 'sdfasdf',
    showPassword: false,
  }

  componentDidMount() {
    this.getApi()
  }

  getApi = () => {}

  renderUsername = () => (
    <LabelForUsername>
      USERNAME
      <InputUsername type="text" placeholder="Username" />
    </LabelForUsername>
  )

  renderPassword = () => {
    const {showPassword} = this.state
    return (
      <LabelForPassword>
        PASSWORD
        <InputUsername
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
    const {errorMessageFromApi} = this.state

    return (
      <LoginFormContainer>
        <LoginContainer>
          <ImageContainer>
            <NxtWatchImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="logo"
            />
          </ImageContainer>
          <form>
            {this.renderUsername()}
            {this.renderPassword()}
            {this.renderShowPassword()}
            <ButtonContainer>
              <LoginButton>Login</LoginButton>
            </ButtonContainer>
          </form>
          <ErrorMessage>{errorMessageFromApi}</ErrorMessage>
        </LoginContainer>
      </LoginFormContainer>
    )
  }
}

export default Login
