import Styled from 'styled-components'

export const HomeContainer = Styled.div`
font-family:'Roboto';
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
background-color:${props => (props.isDark ? '#000000' : '#ffffff')};
`
export const SidebarContainer = Styled.div`
font-family:'Roboto';
display:flex;
flex-direction:column;
justify-content:space-between;
border:solid 2px green;
height:100vh;
width:25%;
max-width:500px;
@media screen and (max-width:768px){
    display:none;
}
`
export const HomeMainContainer = Styled.div`
display:flex;
flex-direction:column;
width:100%;
`
export const BannerImage = Styled.div`
// width:100%;
// height:100px;
padding:10px;
`

export const CloseButtonContainer = Styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;

`

export const WebsiteLogo = Styled.img`
height:30px;
@media screen and (min-width:768px){
    height:40px;
}
`
export const BannerDescription = Styled.p`
font-family:'Roboto';
`
export const GetButton = Styled.button`
background-color:transparent;
padding:10px;
font-family:'Roboto'
font-weight:600;
border-radius:5px;
`
export const VideosContainer = Styled.div`
background-color: #ebebeb;
min-height:100vh;
background-size:cover;
width:100%;
padding-top:10px;
overflow-y: scroll;

// border:Solid 1px red;


`
export const SearchContainer = Styled.div`
display:flex;
flex-direction:row;
align-items:center;
border-right:0px;
margin-left:10px;
margin-right:10px;
border:solid 1px #94a3b8;
border-radius:5px;
@media screen and (min-width:768px){
    width:60%
}
`

export const InputSearch = Styled.input`
font-family:"Roboto";
padding-left:10px;
border:0;
width:95%;
padding:8px;
outline:none;
border-top-left-radius:5px;
border-bottom-left-radius:5px;
`
export const ContactHeading = Styled.h1`
font-family:'Roboto';
font-size:18px;
color:#212121;
`
export const IconsContainer = Styled.div`
display:flex;
`
export const ImageSocialMedia = Styled.img`
height:25px;
margin-right:10px;
font-family:'Roboto';
`
export const BottomAddress = Styled.div`
padding:10px;
`
export const AboutPara = Styled.p`
font-family:'Roboto'
font-weight:600;
`
