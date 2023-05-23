import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {HomeContainer} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItem extends Component {
  state = {
    isLiked: false,
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
  }

  componentDidMount() {
    this.fetchVideoData()
  }

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

  fetchVideoData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    // console.log(params.id)
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
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
      const updatedVideoDetails = {
        id: data.video_details.id,
        title: data.video_details.title,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        viewCount: data.video_details.view_count,
        videoUrl: data.video_details.video_url,
        description: data.video_details.description,
        channelName: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails: updatedVideoDetails,
      })
    }
  }

  render() {
    const {videoDetails} = this.state
    return (
      <>
        <Header />
        <HomeContainer>
          <Sidebar />
          {this.renderPlayer}
          <ReactPlayer
            url={videoDetails.videoUrl}
            controls
            width="100%"
            height="60vh"
          />
        </HomeContainer>
      </>
    )
  }
}

export default VideoItem
