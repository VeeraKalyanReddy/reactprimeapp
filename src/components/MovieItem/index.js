// Write your code here
import './index.css'
// eslint-disable-next-line no-unused-vars
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'

const MovieItem = props => {
  const {details} = props
  // eslint-disable-next-line no-unused-vars
  const {thumbnailUrl, videoUrl, categoryId} = details

  return (
    <div>
      <Popup
        modal
        trigger={<img alt="thumbnail" src={thumbnailUrl} />}
        className="popup-content"
      >
        {close => (
          <div className="modal-cont">
            <button
              data-testid="closeButton"
              type="button"
              className="btn"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div className="movies-cont">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
