import {Link} from 'react-router-dom'
import {SideBarButton, SidebarContainer, SpanAdjust} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const DisplayButtons = props => {
  const {eachButton, isActive, changeActiveButton} = props
  const {id, icon, route} = eachButton
  // route
  const changeActiveBtn = () => {
    changeActiveButton(id)
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <SidebarContainer>
            <Link to={route} className="link-item">
              <SideBarButton
                type="button"
                isActive={isActive}
                onClick={changeActiveBtn}
                isDark={isDark}
              >
                {icon}
                <SpanAdjust>{id}</SpanAdjust>
              </SideBarButton>
            </Link>
          </SidebarContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default DisplayButtons
