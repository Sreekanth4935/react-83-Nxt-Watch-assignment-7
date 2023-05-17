import Styled from 'styled-components'

export const SidebarContainer = Styled.li`
text-decoration:none;
`
export const SideBarButton = Styled.button`
  font-family: 'Roboto';
  display: flex;
  align-items: center;
  padding: 10px;
  border: 0;
  background-color: ${props => (props.isActive ? '#cccccc' : 'transparent')};
  color: ${props => (props.isDark ? '#ffffff' : 'black')};
`

export const SpanAdjust = Styled.span`
padding-left:10px;
border:0;
`
