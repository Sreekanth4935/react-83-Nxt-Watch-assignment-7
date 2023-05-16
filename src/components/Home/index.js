import {Component} from 'react'
import Cookies from 'js-cookie'
import Styled from 'styled-components'
import {IoIosClose} from 'react-icons/io'
import {AiOutlineSearch, AiFillHome} from 'react-icons/ai'
import {RiHomeLine, RiGameLine, RiSaveLine} from 'react-icons/ri'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import DisplayButtons from '../DisplayButtons'

import {
  HomeContainer,
  SidebarContainer,
  HomeMainContainer,
  BannerImage,
  WebsiteLogo,
  BannerDescription,
  GetButton,
  CloseButtonContainer,
  VideosContainer,
  SearchContainer,
  InputSearch,
  ContactHeading,
  IconsContainer,
  BottomAddress,
  ImageSocialMedia,
  AboutPara,
} from './styledComponents'

const buttons = [
  {
    id: 'Home',
    icon: <RiHomeLine size={18} />,
    route: '/home',
  },
  {
    id: 'Trending',
    icon: <AiFillHome size={18} />,
    route: '/trending',
  },

  {
    id: 'Gaming',
    icon: <RiGameLine size={18} />,
    route: '/gaming',
  },
  {
    id: 'Saved Videos',
    icon: <RiSaveLine size={18} />,
    route: '/saved-videos',
  },
]

class Home extends Component {
  state = {
    showBanner: true,
    inputSearchText: '',
    activeButton: buttons[0].id,
  }

  componentDidMount() {
    this.getVideosApi()
  }

  getVideosApi = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {inputSearchText} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${inputSearchText}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const videosData = data.videos.map(eachVideo => ({
      id: eachVideo.id,
      title: eachVideo.title,
      thumbnailUrl: eachVideo.thumbnail_url,
      channel: {
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      },
      viewCount: eachVideo.view_count,
      publishedAt: eachVideo.published_at,
    }))
    console.log(videosData)
  }

  onChangeInput = event => {
    this.setState({
      inputSearchText: event.target.value,
    })
  }

  handleCloseBanner = () => {
    this.setState({
      showBanner: false,
    })
  }

  renderVideos = () => {
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

  changeActiveButton = id => {
    this.setState({activeButton: id})
  }

  render() {
    const {showBanner, activeButton} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <>
              <Header />
              <HomeContainer>
                <SidebarContainer>
                  <div>
                    {buttons.map(eachButton => (
                      <DisplayButtons
                        eachButton={eachButton}
                        key={eachButton.id}
                        isActive={eachButton.id === activeButton}
                        changeActiveButton={this.changeActiveButton}
                      />
                    ))}
                  </div>
                  <BottomAddress>
                    <ContactHeading>CONTACT US</ContactHeading>
                    <IconsContainer>
                      <ImageSocialMedia
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                        alt="facebook logo"
                      />
                      <ImageSocialMedia
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                        alt="twitter logo"
                      />
                      <ImageSocialMedia
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                        alt="linked in logo"
                      />
                    </IconsContainer>
                    <AboutPara>
                      Enjoy!Now to see your channels and recommendations!
                    </AboutPara>
                  </BottomAddress>
                </SidebarContainer>

                <HomeMainContainer>
                  {showBanner && (
                    <BannerImage>
                      <CloseButtonContainer>
                        <WebsiteLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="website logo"
                        />
                        <IoIosClose
                          onClick={this.handleCloseBanner}
                          size={30}
                        />
                      </CloseButtonContainer>
                      <BannerDescription>
                        But Nxt Watch Premium prepaid plans with UPI
                      </BannerDescription>
                      <GetButton type="button">GET IT NOW</GetButton>
                    </BannerImage>
                  )}
                  <>{this.renderVideos()}</>
                </HomeMainContainer>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
