import Slider from 'react-slick'
import './index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movieDetails} = props
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {movieDetails.map(movie => (
          <div className="thumbnail-container" key={movie.id}>
            <MovieItem key={movie.id} details={movie} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
