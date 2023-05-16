import Styled from 'styled-components'

export const SidebarContainer = Styled.div`
display:flex;
flex-direction:column;
justify-content:center;
// align-items:flex-start;
`
export const SideBarButton = Styled.button`
font-family:'Roboto';
display:flex;
align-items:center;
padding:10px;
border:0;
background-color:${props => (props.isActive ? '#d7dfe9' : 'transparent')};
`
export const SpanAdjust = Styled.span`
padding-left:10px;
border:0;
`
