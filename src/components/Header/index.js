import {FaMoon} from 'react-icons/fa'

import ThemeContext from '../../context/ThemeContext'
import LogoutPopup from '../LogoutPopup'

import {
  NavContainer,
  WatchLogoImage,
  ThemeIconContainer,
  MediumDevicesProfile,
  WhiteColorSun,
  HiMenuAdjust,
  NavItems,
} from './styledComponents'

const Header = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, onChangeTheme} = value
      const onClickChangeTheme = () => {
        onChangeTheme()
      }

      return (
        <NavContainer isDark={isDark}>
          <WatchLogoImage
            src={
              isDark
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            }
            alt="website logo"
          />
          <NavItems>
            <ThemeIconContainer
              isDark={isDark}
              type="button"
              onClick={onClickChangeTheme}
              data-testid="theme"
            >
              {isDark ? <WhiteColorSun size={18} /> : <FaMoon size={18} />}
            </ThemeIconContainer>
            <HiMenuAdjust isDark={isDark} size={18} />
            <MediumDevicesProfile
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <LogoutPopup />
          </NavItems>
        </NavContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Header
