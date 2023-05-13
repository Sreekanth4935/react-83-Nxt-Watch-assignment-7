import Styled from 'styled-components'

export const LoginFormContainer = Styled.div`
min-height:100vh;
font-family:"Roboto";
border:solid 1px red;
padding:20px;
display:flex;
flex-direction:column;
justify-content:center;
@media screen and (min-width:768px){
    align-items:center;
}
`
export const LoginContainer = Styled.div`
box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
padding:10px;
border-radius:5px;
@media screen and (min-width:768px){
    width:35%;
    max-width:500px;

}
`

export const NxtWatchImage = Styled.img`
height:20px;
margin-bottom:30px;
`
export const ImageContainer = Styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`
export const LabelForUsername = Styled.label`
display:flex;
flex-direction:column;
color:#475569;
font-family:"Roboto";
font-size:12px;
font-weight:500;
margin-bottom:20px;
`
export const InputUsername = Styled.input`
border:solid 1px #94a3b8;
border-radius:3px;
padding:8px;
margin-top:5px;
padding-left:15px;
outline:none;
`

export const LabelForPassword = Styled(LabelForUsername)`
margin-bottom:20px;
`
export const ShowPassword = Styled.label`
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:center;
cursor:pointer;
`
export const InputCheckbox = Styled.input`
margin-right:8px;
cursor:pointer;
`

export const ButtonContainer = Styled.div`
display:flex;
flex-direction:column;
`
export const LoginButton = Styled.button`
background-color:#3b82f6;
padding:8px;
border:0;
color:#ffffff;
font-weight:600;
border-radius:5px;
margin-top:20px;
;
`
export const ErrorMessage = Styled.p`
color:red;
font-family:"Roboto";
margin-top:4px;
font-size:13px;
`
