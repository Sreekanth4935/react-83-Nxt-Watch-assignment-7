import {Component} from 'react'
import {IoIosClose} from 'react-icons/io'
import {
  BannerImage,
  CloseButtonContainer,
  WebsiteLogo,
  BannerDescription,
  GetButton,
} from './styledComponents'

class Banner extends Component {
  state = {showBanner: true}

  handleCloseBanner = () => {
    this.setState({
      showBanner: false,
    })
  }

  render() {
    const {showBanner} = this.state
    return (
      <>
        {showBanner && (
          <BannerImage>
            <CloseButtonContainer>
              <WebsiteLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="website logo"
              />
              <IoIosClose onClick={this.handleCloseBanner} size={30} />
            </CloseButtonContainer>
            <BannerDescription>
              But Nxt Watch Premium prepaid plans with UPI
            </BannerDescription>
            <GetButton type="button">GET IT NOW</GetButton>
          </BannerImage>
        )}
      </>
    )
  }
}

export default Banner
