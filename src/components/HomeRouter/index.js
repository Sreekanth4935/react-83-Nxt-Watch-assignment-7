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

const HomeRouter = props => {
  const {eachData} = props
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = eachData

  const {name, profileImageUrl} = channel

  return (
    <ListItems>
      <ListThumbnail src={thumbnailUrl} alt="thumbnail" />
      <VideoDetailsContainer>
        <ChannelProfileImage src={profileImageUrl} alt="channel profile" />
        <VideoTitleContainer>
          <VideoTitle>{title}</VideoTitle>
          <SubDetails>
            <SubPara>{name}</SubPara>
            <SubPara>{viewCount}</SubPara>
            <SubPara>{publishedAt}</SubPara>
          </SubDetails>
        </VideoTitleContainer>
      </VideoDetailsContainer>
    </ListItems>
  )
}

export default HomeRouter
