import Styled from 'styled-components'

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
