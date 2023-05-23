import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Styled from 'styled-components'
import {AiOutlineSearch} from 'react-icons/ai'
import HomeRouter from '../HomeRouter'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Banner from '../Banner'
import {
  HomeContainer,
  HomeMainContainer,
  VideosContainer,
  SearchContainer,
  InputSearch,
  BottomVideosContainer,
  LoaderContainer,
  UlHomeVideos,
  FailureImage,
  FailureContainer,
  FailureText,
  FailureDescription,
  RetryButton,
  ButtonSearch,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    inputSearchText: '',
    apiStatus: apiStatusConstants.initial,
    homeVideosData: [],
  }

  componentDidMount() {
    this.getVideosApi()
  }

  getVideosApi = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {inputSearchText} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${inputSearchText}`
    console.log(apiUrl)
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok) {
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
      this.setState({
        apiStatus: apiStatusConstants.success,
        homeVideosData: videosData,
      })
      console.log(videosData)
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

  RetryToDefaultVideos = () =>
    this.setState({inputSearchText: ''}, this.getVideosApi)

  renderNoVideosFound = () => (
    <FailureContainer>
      <FailureImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png " />
      <FailureText>No Search results found</FailureText>
      <FailureDescription>
        Try different key words or remove search filter
      </FailureDescription>
      <RetryButton onClick={this.RetryToDefaultVideos}>Retry</RetryButton>
    </FailureContainer>
  )

  renderSuccessView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const {homeVideosData} = this.state
        return (
          <>
            {homeVideosData.length === 0 ? (
              this.renderNoVideosFound()
            ) : (
              <UlHomeVideos isDark={isDark}>
                {homeVideosData.map(eachData => (
                  <HomeRouter eachData={eachData} key={eachData.id} />
                ))}
              </UlHomeVideos>
            )}
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  RetryApiCall = () => {
    this.getVideosApi()
  }

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const imageUrl = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureContainer>
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

  renderHomeVideos = () => {
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

  onChangeInput = event => {
    this.setState({
      inputSearchText: event.target.value,
    })
  }

  getSearchedInputVideos = () => {
    this.getVideosApi()
  }

  renderSearchedVideos = () => {
    const SearchIconAdjust = Styled(AiOutlineSearch)`
      width:50px;`

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const {inputSearchText} = this.state
          return (
            <VideosContainer isDark={isDark}>
              <SearchContainer>
                <InputSearch
                  type="search"
                  placeholder="Search"
                  value={inputSearchText}
                  onChange={this.onChangeInput}
                />
                <ButtonSearch type="button" data-testid="searchButton">
                  <SearchIconAdjust
                    size={20}
                    onClick={this.getSearchedInputVideos}
                  />
                </ButtonSearch>
              </SearchContainer>
            </VideosContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
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
                  <Banner isDark={isDark} />
                  {this.renderSearchedVideos()}

                  {this.renderHomeVideos()}
                </BottomVideosContainer>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
