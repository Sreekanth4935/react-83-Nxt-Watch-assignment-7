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
  padding-top: 10px;
  overflow-y: scroll;
  color : ${props => (props.isDark ? '#ffffff' : '#000000')};
  background-color:${props => (props.isDark ? '#000000' : '#ebebeb')};
`
// apple

export const TrendingContainer = Styled.div`
display:flex;
flex-direction:row;
align-items:center; 
background-color:green;
`
