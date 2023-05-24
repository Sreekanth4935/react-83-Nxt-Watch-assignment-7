import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import {
  HomeContainer,
  HomeMainContainer,
  BottomVideosContainer,
  TrendingContainer,
} from './styledComponent'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'

class TrendingRoute extends Component {
  state = {
    a: 1,
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <Header />
              <HomeContainer>
                <HomeMainContainer>
                  <Sidebar />
                </HomeMainContainer>
                <BottomVideosContainer isDark={isDark}>
                  <TrendingContainer>
                    <HiFire size={20} />
                    <h1>Trending</h1>
                  </TrendingContainer>
                </BottomVideosContainer>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default TrendingRoute
