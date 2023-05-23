import Styled from 'styled-components'

export const HomeContainer = Styled.div`
font-family:'Roboto';
display:flex;
flex-direction:row;
background-color:${props => (props.isDark ? '#212121' : '#ebebeb')};
color:${props => (props.isDark ? '#ffffff' : '#000000')};
border:solid 2px red;
height:100vh;
width:100%;

`
export const HomeMainContainer = Styled.div`
display:flex;
flex-direction:row;
`
export const VideoDetailsContainer = Styled.div`
font-family:'Roboto';
width:100%;
overflow-y: auto;
`

export const LoaderContainer = Styled.div`
min-height:80vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-left:250px;
`
export const VideoTitle = Styled.h1`
padding:10px;
font-size:13px;
font-family:"Roboto";
@media screen and (min-width:768px){
    font-size:16px;
}
`
export const ViewsContainer = Styled.div`
display:flex;
flex-direction:column;
justify-content:center;
// align-items:center;
@media screen and (min-width:768px){
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
}
`
export const Views = Styled.p`
font-family:"Roboto";
font-size:15px;
padding:10px;
`
export const DateCount = Styled.p`
font-family:'Roboto';
font-size:15px;
padding-left:5px;
`
export const TimeContainer = Styled.div`
display:flex;
flex-direction:row;
align-items:center;
`
export const LikesContainer = Styled.div`
font-family:'Roboto';
`

export const ButtonsLiked = Styled.button`
display:flex;
flex-direction:row;
align-items:center;
text-align:center;
font-size:15px;
margin-right:10px;
background-color:transparent;
border:0px;
`
export const ButtonsContainer = Styled.div`
display:flex;
`
export const ChannelDetailsContainer = Styled.div`
display:flex;
flex-direction:row;
align-items:center;
`
export const ChannelImage = Styled.img`
height:50px;
margin:10px;
`
export const ChannelDescription = Styled.p`
font-family:'Roboto';
padding-left:10px;

`
