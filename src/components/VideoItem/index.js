import {Component} from 'react'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'

import {
  HomeContainer,
  VideoDetailsContainer,
  LoaderContainer,
  HomeMainContainer,
  VideoTitle,
  ViewsContainer,
  Views,
  DateCount,
  TimeContainer,
  LikesContainer,
  ButtonsLiked,
  ButtonsContainer,
  ChannelDetailsContainer,
  ChannelImage,
  ChannelDescription,
} from './styledComponents'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItem extends Component {
  state = {
    isLiked: false,
    isDisliked: false,
    isSaved: false,
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    isAvailable: false,
  }

  componentDidMount() {
    this.fetchVideoData()
  }

  fetchVideoData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    // console.log(this.props)
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
        isAvailable: true,
      })
    }
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const {videoDetails} = this.state
    // const {videoUrl} = videoDetails
    return (
      <ReactPlayer
        url={videoDetails.videoUrl}
        controls
        width="100%"
        height="60vh"
      />
    )
  }

  renderVideo = () => {
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

  getDate = () => {
    const {videoDetails} = this.state
    const parsedDate = new Date(videoDetails.publishedAt)
    const distance = formatDistanceToNow(parsedDate)
    return <DateCount>{distance}</DateCount>
  }

  likeButtonClicked = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  disLikedButtonClicked = () => {
    this.setState(prevState => ({
      isLiked: false,
      isDisliked: !prevState.isDisliked,
    }))
  }

  onClickSavedButton = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return <h1>hi</h1>
      }}
    </ThemeContext.Consumer>
  )

  render() {
    const {videoDetails, isAvailable, isLiked, isDisliked, isSaved} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <Header />
              <HomeContainer isDark={isDark}>
                <HomeMainContainer>
                  <Sidebar />
                </HomeMainContainer>
                <VideoDetailsContainer>
                  {this.renderVideo()}
                  <VideoTitle>{videoDetails.title}</VideoTitle>
                  <ViewsContainer>
                    <TimeContainer>
                      <Views>{videoDetails.viewCount}</Views>
                      {isAvailable && this.getDate()}
                    </TimeContainer>
                    <LikesContainer>
                      <ButtonsContainer>
                        <ButtonsLiked
                          type="button"
                          className={isLiked ? 'liked' : ''}
                          onClick={this.likeButtonClicked}
                        >
                          <BiLike /> Like
                        </ButtonsLiked>
                        <ButtonsLiked
                          type="button"
                          className={isDisliked ? 'liked' : ''}
                          onClick={this.disLikedButtonClicked}
                        >
                          <BiDislike />
                          Dislike
                        </ButtonsLiked>
                        <ButtonsLiked
                          type="button"
                          onClicked={this.onClickSavedButton}
                        >
                          <MdPlaylistAdd />
                          Save
                        </ButtonsLiked>
                      </ButtonsContainer>
                    </LikesContainer>
                  </ViewsContainer>
                  <hr />
                  <ChannelDetailsContainer>
                    <div>
                      <ChannelImage src={videoDetails.profileImageUrl} />
                    </div>
                    <div>
                      <p>{videoDetails.channelName}</p>
                      <p>{videoDetails.subscriberCount}</p>
                    </div>
                  </ChannelDetailsContainer>
                  <ChannelDescription>
                    {videoDetails.description}
                  </ChannelDescription>
                </VideoDetailsContainer>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItem
