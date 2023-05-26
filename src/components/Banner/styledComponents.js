import Styled from 'styled-components'

import {AiOutlineSearch} from 'react-icons/ai'

export const VideosContainer = Styled.div`
  background-color: #ebebeb;
  min-height: 80vh;
  background-size: cover;
  width: 100%;
  padding-top: 10px;
  overflow-y: scroll;
`

export const SearchContainer = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-right: 0px;
  margin-left: 10px;
  margin-right: 10px;
  border: solid 1px #94a3b8;
  border-radius: 5px;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

export const InputSearch = Styled.input`
  font-family: 'Roboto';
  padding-left: 10px;
  border: 0;
  width: 95%;
  padding: 8px;
  outline: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`

export const SearchIconAdjust = Styled(AiOutlineSearch)`
  width: 50px;
`

export const BannerContainer = Styled.div`
display:flex;
flex-direction:column;
width:100%;
// border:solid 1px green;
background-color:#ffffff;
`

export const BannerImage = Styled.div`
  height:25vh;
  padding:0 10px 10px 10px;
  display:flex;
  flex-direction:column;
//   align-items:flex-start;
  justify-content:space-between;

  @media screen and (min-width:768px){
      background-image:url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
      background-size:cover;
  }
`

export const CloseButtonContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width:100%; 
`
export const WebsiteLogo = Styled.img`
  height: 30px;
  @media screen and (min-width:768px){
    height: 40px;
  }
`

export const BannerDescription = Styled.p`
  font-family: 'Roboto';
`

export const GetButton = Styled.button`
  background-color: transparent;
  padding: 10px;
  font-family: 'Roboto';
  font-weight: 600;
  border-radius: 5px;
  align-self:flex-start;
  width:100px;
`
