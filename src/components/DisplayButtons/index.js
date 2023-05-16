import {SidebarContainer, SideBarButton, SpanAdjust} from './styledComponent'

const DisplayButtons = props => {
  const {eachButton, isActive, changeActiveButton} = props
  const {id, icon, route} = eachButton

  const changeActiveBtn = () => {
    changeActiveButton(id)
  }

  return (
    <SidebarContainer>
      <SideBarButton
        type="button"
        isActive={isActive}
        onClick={changeActiveBtn}
      >
        {icon}
        <SpanAdjust>{id}</SpanAdjust>
      </SideBarButton>
    </SidebarContainer>
  )
}

export default DisplayButtons
