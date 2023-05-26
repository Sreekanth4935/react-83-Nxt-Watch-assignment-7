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
  min-height: 100vh;
  background-size: cover;
  width: 100%;
//overflow-y: scroll;
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
  flex-direction: column;
  justify-content:center;
  align-items:center;
  min-height:60vh;
`

export const NotFoundImage = Styled.img`
margin-top:20%;
height:200px;
@media screen and (min-width:768px){
    height:250px;
    margin-top:12%;
}
`
export const NotFoundContainer = Styled.div`
text-align:50%;
font-family:'Roboto';
`
