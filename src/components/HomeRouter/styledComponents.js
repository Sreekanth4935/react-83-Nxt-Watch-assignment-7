import Styled from 'styled-components'

export const ListItems = Styled.li`
margin-left:0px;
margin-left:10px;
margin-bottom:10px;
display:flex;
flex-direction:column;

`
export const ListThumbnail = Styled.img`
font-family:'Roboto';
width:100%;
height:200px;
// border:solid 5px green;
flex-wrap:wrap;
margin-left:10px;
margin-bottom:10px;
@media screen and (min-width:768px){
    width: 100%;
    max-width: 280px;
}
`
export const VideoDetailsContainer = Styled.div`
display: flex;
align-items:center;
align-items:flex-start;
width:100%;
@media screen and (min-width:768px){
width: 100%;
max-width: 280px;
}`

export const VideoTitle = Styled.p`
font-family:'Roboto';
margin-left:10px;
font-size:13px;
@media screen and (min-width:768px){
    font-size:15px;
}
`
export const ChannelProfileImage = Styled.img`
margin-top:20px;
height:30px;
`
export const VideoTitleContainer = Styled.div`
font-family:'Roboto';
`
export const SubDetails = Styled.ul`
font-family:'Roboto';
list-style-type:none;
padding-left:10px;
font-size:13px;
padding-right:20px;
display:flex;
`
export const SubPara = Styled.p`
padding-right:20px;
`
