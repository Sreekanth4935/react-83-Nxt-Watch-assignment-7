import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  ListItems,
  ListThumbnail,
  VideoDetailsContainer,
  VideoTitle,
  ChannelProfileImage,
  VideoTitleContainer,
  SubDetails,
  SubPara,
} from './styledComponents'
import './index.css'

const HomeRouter = props => {
  const {eachData} = props
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = eachData

  const {name, profileImageUrl} = channel

  const parsedDate = new Date(publishedAt)

  const distance = formatDistanceToNow(parsedDate)

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const colorClass = isDark ? 'dark-mode' : 'light-mode'
        return (
          <Link to={`videos/${id}`} className={`${colorClass} `}>
            <ListItems>
              <ListThumbnail src={thumbnailUrl} alt="thumbnail" />
              <VideoDetailsContainer>
                <ChannelProfileImage
                  src={profileImageUrl}
                  alt="channel profile"
                />
                <VideoTitleContainer>
                  <VideoTitle>{title}</VideoTitle>
                  <SubDetails>
                    <SubPara>{name}</SubPara>
                    <SubPara>{viewCount}</SubPara>
                    <SubPara>{distance}</SubPara>
                  </SubDetails>
                </VideoTitleContainer>
              </VideoDetailsContainer>
            </ListItems>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default HomeRouter
