import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'
import {
  HomeContainer,
  HomeMainContainer,
  BottomVideosContainer,
  RenderVideosContainer,
  NotFoundImage,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const imageUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <HomeContainer>
            <HomeMainContainer>
              <Sidebar />
            </HomeMainContainer>
            <BottomVideosContainer>
              <RenderVideosContainer isDark={isDark}>
                <NotFoundImage src={imageUrl} alt="not-found" />
                <h1>Page Not Found</h1>
                <p>We are sorry,the page you are requested could not found.</p>
              </RenderVideosContainer>
            </BottomVideosContainer>
          </HomeContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
