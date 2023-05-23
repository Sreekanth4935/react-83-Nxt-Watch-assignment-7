import Styled from 'styled-components'

export const HomeContainer = Styled.div`
font-family:'Roboto';
display:flex;
flex-direction:row;
// justify-content:center;
// align-items:center;
background-color:${props => (props.isDark ? '#000000' : '#ffffff')};
border:solid 2px red;
`
