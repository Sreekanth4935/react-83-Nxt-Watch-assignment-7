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
  FailureContainer,
  FailureImage,
  FailureText,
  FailureDescription,
  RetryButton,
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

  renderSuccessView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {onChangeSavedVideos, isDark, onChangeRemoveSavedVideo} = value
        const {
          videoDetails,
          isSaved,
          isAvailable,
          isLiked,
          isDisliked,
        } = this.state

        const onCallSavedVideos = newSaved => {
          this.setState(
            prevState => ({
              isSaved: !prevState.isSaved,
            }),
            () => {
              if (!isSaved) {
                onChangeSavedVideos({...videoDetails, isSaved: newSaved})
              } else {
                onChangeRemoveSavedVideo(videoDetails)
              }
            },
          )
        }

        return (
          <>
            <ReactPlayer
              url={videoDetails.videoUrl}
              controls
              width="100%"
              height="60vh"
            />
            <VideoTitle>{videoDetails.title}</VideoTitle>
            <ViewsContainer>
              <TimeContainer>
                <Views>{videoDetails.viewCount} views</Views>
                {isAvailable && this.getDate()}
              </TimeContainer>
              <LikesContainer>
                <ButtonsContainer>
                  <ButtonsLiked
                    isLiked={isLiked}
                    isDark={isDark}
                    type="button"
                    className={isLiked ? 'liked' : ''}
                    onClick={this.likeButtonClicked}
                  >
                    <BiLike /> Like
                  </ButtonsLiked>
                  <ButtonsLiked
                    isDisliked={isDisliked}
                    isDark={isDark}
                    type="button"
                    className={isDisliked ? 'liked' : ''}
                    onClick={this.disLikedButtonClicked}
                  >
                    <BiDislike />
                    Dislike
                  </ButtonsLiked>
                  <ButtonsLiked
                    isDark={isDark}
                    isSaved={isSaved}
                    type="button"
                    onClick={() => onCallSavedVideos(isSaved)}
                    className={isSaved ? 'liked' : ''}
                  >
                    <MdPlaylistAdd />
                    {isSaved ? 'Saved' : 'Save'}
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
                <p>{videoDetails.subscriberCount} subscribers</p>
              </div>
            </ChannelDetailsContainer>
            <ChannelDescription>{videoDetails.description}</ChannelDescription>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  RetryApiCall = () => this.fetchVideoData()

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

  onClickSavedButton = () => {}

  render() {
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
