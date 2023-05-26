import {Link} from 'react-router-dom'
import {SideBarButton, SidebarContainer, SpanAdjust} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const DisplayButtons = props => {
  const {eachButton} = props
  const {id, icon, route} = eachButton
  // route

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, changeActiveButton, sideButtonActiveId} = value
        const onChangeActiveButton = () => {
          changeActiveButton(id)
        }
        return (
          <SidebarContainer>
            <Link to={route} className="link-item">
              <SideBarButton
                type="button"
                isActive={id === sideButtonActiveId}
                onClick={onChangeActiveButton}
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
