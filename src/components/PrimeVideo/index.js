import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    movie => movie.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    movie => movie.categoryId === 'COMEDY',
  )
  return (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-img"
      />
      <div className="sliders-container">
        <div className="movie-container">
          <h1 className="heading">Action Movies</h1>
          <MoviesSlider movieDetails={actionMoviesList} />
        </div>
        <div className="movie-container">
          <h1 className="heading">Comedy Movies</h1>
          <MoviesSlider movieDetails={comedyMoviesList} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
