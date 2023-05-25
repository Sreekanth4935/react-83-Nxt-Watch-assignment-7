import Styled from 'styled-components'

export const HomeContainer = Styled.div`
font-family:'Roboto';
display:flex;
flex-direction:row;
background-color:${props => (props.isDark ? '#000000' : '#ffffff')};
border:solid 2px red;
`
export const middle = Styled.div`
font-family:'Roboto';
`
export const HomeMainContainer = Styled.div`
display:flex;
flex-direction:column;
// width:100%;
`
export const BottomVideosContainer = Styled.div`
  background-color: #ebebeb;
  height: 100vh;
  background-size: cover;
  width: 100%;
  overflow-y: scroll;
  color : ${props => (props.isDark ? '#ffffff' : '#000000')};
  background-color:${props => (props.isDark ? '#000000' : '#ebebeb')};
`
// apple

export const TrendingContainer = Styled.div`
display:flex;
flex-direction:row;
align-items:center; 
color:red;
background-color:${props => (props.isDark ? '#212121' : '#cbd5e1')};
font-family:'Roboto';
padding-left:15px;
margin-bottom:35px;
`
export const TrendingHeading = Styled.h1`
margin-left:15px;
color : ${props => (props.isDark ? '#ffffff' : '#000000')};

`
// extracted
export const RenderVideosContainer = Styled.div`
display:flex;
flex-direction:column;
border: solid 20px violet;
`

export const FailureContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color:${props => (props.isDark ? '#000000' : '#ffffff')};
`

export const FailureImage = Styled.img`
  font-family: 'Roboto';
  height: 200px;
`

export const FailureText = Styled.h1`
  font-size: 15px;
  font-family: 'Roboto';
`

export const FailureDescription = Styled.p`
  color: #606060;
  text-align: center;
  font-family: 'Roboto';
`

export const RetryButton = Styled.button`
  background-color: #4f46e5;
  padding: 8px;
  width: 100px;
  border-radius: 3px;
  color: #ffffffff;
  border: 0px;
  font-family: 'Roboto';
  margin-top: 10px;
  cursor: pointer;
  outline: none;
`

export const LoaderContainer = Styled.div`
min-height:80vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
// closed

export const TrendingVideoContainer = Styled.div`
display:flex;
flex-direction:column;
border:solid 3px green;
@media screen and (min-width:768px){
    flex-direction:row;
    width:95%;
    align-self:center;
    margin-left:30px;
    margin-top:20px;
    margin-bottom:20px;
}
`
export const TrendingImageContainer = Styled.div`
@media screen and (min-width:768px){
    border:solid 2px yellow;
    margin-right:10px;
    border-radius:5px;
}
`

export const TrendingImage = Styled.img`
width:100%;
@media screen and (min-width:768px){
    width:30%;
    width:400px;
}
`
export const ChannelLogo = Styled.img`
height:50px;
font-family:'Roboto';
padding-top:15px;
margin-left:10px;
margin-right:10px;
@media screen and (min-width:768px){
    display:none;
}
`

export const ChannelDetailsContainer = Styled.div`
display:flex;
flex-direction:row;
align-items:flex-start;
color : ${props => (props.isDark ? '#ffffff' : '#000000')};

`
export const VideoTitle = Styled.h1`
font-family:'Roboto';
font-size:15px;
`
export const ChannelDetailsContainerAll = Styled.div`
display:flex;
flex-direction:row;
font-family:'Roboto';
@media screen and (min-width:768px){
    flex-direction:column;
}
`
export const DistanceContainer = Styled.div`
display:flex;
flex-direction:row;
padding-left:10px;
@media screen and (min-width:768px){
    padding-left:0px;
}
`
export const Count = Styled.p`
padding-right:10px;

`
