import Popup from 'reactjs-popup'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Styled from 'styled-components'
import {FiLogOut} from 'react-icons/fi'
import ThemeContext from '../../context/ThemeContext'
import {
  LogoutButton,
  TriggerButtonStyled,
  ConfirmButton,
  LogoutPopupContainer,
  ButtonClose,
} from './styledComponents'

const FiLogOutAdjust = Styled(FiLogOut)`
    color : ${props => (props.isDark ? '#ffffff' : '#000000')};
    @media screen and (min-width:768px){
        display:none;
    }
   `

const LogoutPopup = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      console.log(isDark, 'in Logout Popup')

      const clearCookies = () => {
        Cookies.remove('jwt_token')
        const {history} = props

        history.replace('/')
      }

      return (
        <div className="popup-container">
          <Popup
            modal
            trigger={
              <TriggerButtonStyled type="button" className="trigger-button">
                <LogoutButton isDark={isDark}>Logout</LogoutButton>
                <FiLogOutAdjust isDark={isDark} size={18} />
              </TriggerButtonStyled>
            }
          >
            {close => (
              <LogoutPopupContainer isDark={isDark}>
                <p>Are you sure,you want to logout?</p>
                <div>
                  <ButtonClose
                    type="button"
                    className="trigger-button"
                    onClick={() => close()}
                    isDark={isDark}
                  >
                    Cancel
                  </ButtonClose>

                  <ConfirmButton onClick={clearCookies}>Confirm</ConfirmButton>
                </div>
              </LogoutPopupContainer>
            )}
          </Popup>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(LogoutPopup)
