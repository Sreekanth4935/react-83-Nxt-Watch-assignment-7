import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'
import {
  HomeContainer,
  HomeMainContainer,
  BottomVideosContainer,
  TrendingContainer,
  TrendingHeading,
  RenderVideosContainer,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureText,
  FailureDescription,
  RetryButton,
  ListItemContainer,
  GamingImage,
  GamingVideoTitle,
  GamingVideoViews,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingRoute extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gamingVideosData: [],
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    // console.log(response)
    if (response.ok === true) {
      const data = await response.json()
      //   console.log(data)
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      //   console.log(updatedData)
      this.setState({
        apiStatus: apiStatusConstants.success,
        gamingVideosData: updatedData,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoader = () => (
    <div className="loader-container">
      <LoaderContainer data-testid="loader">
        <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
      </LoaderContainer>
    </div>
  )

  renderSuccessView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const {gamingVideosData} = this.state
        return (
          <>
            {gamingVideosData.map(eachVideo => {
              console.log(eachVideo)
              return (
                <>
                  <Link to={`/videos/${eachVideo.id}`} className="link">
                    <ListItemContainer isDark={isDark}>
                      <GamingImage src={eachVideo.thumbnailUrl} alt="gaming" />
                      <GamingVideoTitle>{eachVideo.title}</GamingVideoTitle>
                      <GamingVideoViews>
                        {eachVideo.viewCount} Watching Worldwide
                      </GamingVideoViews>
                    </ListItemContainer>
                  </Link>
                </>
              )
            })}
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  RetryApiCall = () => {
    this.getGamingVideos()
  }

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const imageUrl = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureContainer isDark={isDark}>
            <FailureImage src={imageUrl} alt="failure-img" />
            <FailureText>Oops! Something Went Wrong </FailureText>
            <FailureDescription>
              We are having some trouble to complete your request. Please try
              again.
            </FailureDescription>
            <RetryButton type="button" onClick={this.RetryApiCall}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderGamingVideo = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <Header />
              <HomeContainer>
                <HomeMainContainer>
                  <Sidebar />
                </HomeMainContainer>
                <BottomVideosContainer isDark={isDark}>
                  <TrendingContainer isDark={isDark}>
                    <SiYoutubegaming size={25} />
                    <TrendingHeading isDark={isDark}>Gaming</TrendingHeading>
                  </TrendingContainer>
                  <RenderVideosContainer>
                    {this.renderGamingVideo()}
                  </RenderVideosContainer>
                </BottomVideosContainer>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default GamingRoute
