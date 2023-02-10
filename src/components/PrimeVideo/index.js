// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionList = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyList = moviesList.filter(each => each.categoryId === 'COMEDY')

  return (
    <div className="app-cont">
      <img
        className="image"
        alt="prime video"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png "
      />
      <div className="movies-cont">
        <h1 className="head">Action Movies</h1>
        <MoviesSlider moviesList={actionList} />
        <h1 className="head">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyList} />
      </div>
    </div>
  )
}
export default PrimeVideo
