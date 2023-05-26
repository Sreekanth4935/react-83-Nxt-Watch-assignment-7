import {Component} from 'react'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
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
  NotFoundContainer,
  NotFoundImage,
  TrendingVideoContainer,
  TrendingImageContainer,
  TrendingImage,
  ChannelDetailsContainer,
  ChannelLogo,
  VideoTitle,
  ChannelDetailsContainerAll,
  DistanceContainer,
  Count,
} from './styledComponents'

class SavedVideosRoute extends Component {
  renderNoSavedVideos = () => (
    <NotFoundContainer>
      <NotFoundImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <h1>No saved videos found</h1>
      <p>You can save your videos while watching them</p>
    </NotFoundContainer>
  )

  renderSavedVideos = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, savedVideos} = value

        return (
          <>
            {savedVideos.map(eachVideo => {
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
                        <ChannelLogo src={eachVideo.profileImageUrl} alt="" />
                        <div>
                          <VideoTitle>{eachVideo.title}</VideoTitle>
                          <ChannelDetailsContainerAll>
                            <p>{eachVideo.name}</p>
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

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, savedVideos} = value
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
                    <TrendingHeading isDark={isDark}>
                      Saved videos
                    </TrendingHeading>
                  </TrendingContainer>
                  <RenderVideosContainer>
                    {savedVideos.length === 0
                      ? this.renderNoSavedVideos()
                      : this.renderSavedVideos()}
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

export default SavedVideosRoute
