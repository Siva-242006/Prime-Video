import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {details} = props
  let width = window.innerWidth
  let height = width >= 768 ? '25vw' : '30vh'

  const updateDimensions = () => {
    width = window.innerWidth
    height = width >= 768 ? '25vw' : '34vh'
  }
  window.addEventListener('resize', updateDimensions)
  updateDimensions()

  return (
    <Popup
      trigger={
        <img
          src={details.thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-image"
        />
      }
      modal
      className="popup-content"
    >
      {close => (
        <div>
          <div className="close-button-container">
            <button
              data-testid="closeButton"
              type="button"
              className="close-button"
              onClick={close}
            >
              <IoMdClose />
            </button>
          </div>
          <div className="player-container">
            <ReactPlayer
              url={details.videoUrl}
              controls="true"
              className="react-player"
              height={height}
              width="100%"
            />
          </div>
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
