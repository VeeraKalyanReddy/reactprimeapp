// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesList} = props

  const set = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div>
      <Slider {...set}>
        {moviesList.map(each => (
          <MovieItem key={each.id} details={each} />
        ))}
      </Slider>
    </div>
  )
}
export default MoviesSlider
