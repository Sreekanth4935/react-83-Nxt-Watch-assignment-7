import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  RenderVideosContainer,
  HomeContainer,
  HomeMainContainer,
  BottomVideosContainer,
  TrendingContainer,
  TrendingHeading,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureText,
  FailureDescription,
  RetryButton,
  TrendingImage,
  TrendingVideoContainer,
  ChannelLogo,
  TrendingImageContainer,
  ChannelDetailsContainer,
  VideoTitle,
  ChannelDetailsContainerAll,
  DistanceContainer,
  Count,
} from './styledComponent'

import ThemeContext from '../../context/ThemeContext'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingRoute extends Component {
  state = {
    trendingVideosData: [],
    apiStatus: '',
  }

  componentDidMount() {
    this.getTrendingApiVideos()
  }

  getTrendingApiVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    // console.log(response)
    if (response.ok) {
      const data = await response.json()
      //   console.log(data)
      const updatedData = data.videos.map(eachVideo => ({
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

      this.setState({
        apiStatus: apiStatusConstants.success,
        trendingVideosData: updatedData,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderSuccessView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const {trendingVideosData} = this.state
        return (
          <>
            {trendingVideosData.map(eachVideo => {
              console.log(eachVideo)
              const getDate = () => {
                const parsedDate = new Date(eachVideo.publishedAt)
                const distance = formatDistanceToNow(parsedDate)
                return <p>{distance}</p>
              }
              return (
                <>
                  <Link to={`/videos/${eachVideo.id}`} className="link">
                    <TrendingVideoContainer>
                      <TrendingImageContainer>
                        <TrendingImage src={eachVideo.thumbnailUrl} alt="" />
                      </TrendingImageContainer>
                      <ChannelDetailsContainer isDark={isDark}>
                        <ChannelLogo
                          src={eachVideo.channel.profileImageUrl}
                          alt=""
                        />
                        <div>
                          <VideoTitle>{eachVideo.title}</VideoTitle>
                          <ChannelDetailsContainerAll>
                            <p>{eachVideo.channel.name}</p>
                            <DistanceContainer>
                              <Count>{eachVideo.viewCount} views</Count>
                              {getDate()}
                            </DistanceContainer>
                          </ChannelDetailsContainerAll>
                        </div>
                      </ChannelDetailsContainer>
                    </TrendingVideoContainer>
                  </Link>
                </>
              )
            })}
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  RetryApiCall = () => this.getTrendingApiVideos()

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

  renderTrendingVideo = () => {
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
                    <HiFire size={25} />
                    <TrendingHeading isDark={isDark}>Trending</TrendingHeading>
                  </TrendingContainer>
                  <RenderVideosContainer>
                    {this.renderTrendingVideo()}
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

export default TrendingRoute
