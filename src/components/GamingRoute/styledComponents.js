import Styled from 'styled-components'

export const HomeContainer = Styled.div`
  font-family: 'Roboto';
  display: flex;
  flex-direction: row;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
  // border:solid 2px red;
`

export const HomeMainContainer = Styled.div`
  display: flex;
  flex-direction: column;
  // width:100%;
`

export const BottomVideosContainer = Styled.div`
  background-color: #ebebeb;
  height: 100vh;
  background-size: cover;
  width: 100%;
  overflow-y: scroll;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  background-color: ${props => (props.isDark ? '#000000' : '#ebebeb')};
`

export const TrendingContainer = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: red;
  background-color: ${props => (props.isDark ? '#212121' : '#cbd5e1')};
  font-family: 'Roboto';
  padding-left: 15px;
  margin-bottom: 35px;
`

export const TrendingHeading = Styled.h1`
  margin-left: 15px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export const RenderVideosContainer = Styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  align-items:center;
  height:100vh;
//   justify-content:center;
`
export const LoaderContainer = Styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FailureContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.isDark ? '#000000' : '#f9f9f9')};
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
export const ListItemContainer = Styled.div`
 font-family:"Roboto";
 color : ${props => (props.isDark ? '#f9f9f9' : '#000000')};
`

export const GamingImage = Styled.img`
font-family:'Roboto';
width:200px;
margin:10px;
@media screen and (min-width:576px){
    width:250px;
}
@media screen and (min-width:768px){
    width:100%;
    max-width:280px;
}
`

export const GamingVideoTitle = Styled.h1`
font-family:'Roboto';
font-size:15px;
padding-left:10px;
line-height:0.3;
`
export const GamingVideoViews = Styled.p`
font-family:'Roboto';
font-size:13px;
color:#475569;
padding-left:10px;
`
