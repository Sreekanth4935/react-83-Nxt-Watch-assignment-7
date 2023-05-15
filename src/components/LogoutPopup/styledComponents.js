import Styled from 'styled-components'

export const LogoutButton = Styled.button`
@media screen and (max-width:768px){
    display:none;
}

color : ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
background-color:${props => (props.isDark ? 'transparent' : '#ffffff')};
border :solid 1px ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
font-weight:600;
padding:5px;
padding-left:20px;
padding-right:20px;
border-radius:3px;
`
export const TriggerButtonStyled = Styled.button`
margin-left:20px;
margin-right:20px;
background-color:transparent;
border:0px;
`

export const LogoutPopupContainer = Styled.div`
  background-color:${props => (props.isDark ? '#000000' : '#ffffff')};
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  font-family: "Roboto";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
export const ButtonClose = Styled.button`
background-color:transparent;
border:${props => (props.isDark ? 'solid 1px  #64748b' : 'solid 1px  #64748b')};
font-family:"Roboto";
margin-right:10px;
padding:5px;
width:60px;
color:#64748b;
border-radius:3px;
`
export const ConfirmButton = Styled.button`
background-color:#3b82f6;
border-radius:3px;
padding:5px;
border:0;
color:#ffff;
padding-left:5px;
padding-right:5px;
width:60px;
margin-left:10px;
`
