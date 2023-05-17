import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Styled from 'styled-components'

import {AiOutlineSearch} from 'react-icons/ai'

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
        homeVideosData: videosData,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoader = () => (
    <div>
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderHomeVideos = () => {
    const {apiStatus} = this.state
    console.log(apiStatus)

    switch ('IN_PROGRESS') {
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
                <Banner isDark={isDark} />
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
