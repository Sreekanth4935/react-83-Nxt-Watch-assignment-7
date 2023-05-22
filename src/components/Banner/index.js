import {Component} from 'react'
import {IoIosClose} from 'react-icons/io'
import {AiOutlineSearch} from 'react-icons/ai'
import Styled from 'styled-components'

import {
  BannerImage,
  CloseButtonContainer,
  WebsiteLogo,
  BannerDescription,
  GetButton,
  BannerContainer,
  VideosContainer,
  SearchContainer,
  InputSearch,
} from './styledComponents'

class Banner extends Component {
  state = {showBanner: true}

  handleCloseBanner = () => {
    this.setState({
      showBanner: false,
    })
  }

  //   onChangeInput = event => {
  //     this.setState({
  //       inputSearchText: event.target.value,
  //     })
  //   }

  renderSearchedVideos = () => {
    const SearchIconAdjust = Styled(AiOutlineSearch)`
    width:50px;`

    return (
      <VideosContainer>
        <SearchContainer>
          <InputSearch type="search" placeholder="Search" />
          <SearchIconAdjust onChange={this.onChangeInput} size={20} />
        </SearchContainer>
      </VideosContainer>
    )
  }

  render() {
    const {showBanner} = this.state
    return (
      <>
        <BannerContainer>
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
        </BannerContainer>
      </>
    )
  }
}

export default Banner
