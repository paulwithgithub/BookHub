import {Link} from 'react-router-dom'
import {BsFillStarFill} from 'react-icons/bs'
import './index.css'

const ShowBookByRequest = props => {
  const {eachBookDetails} = props
  const {id, authorName, rating, readStatus, title, coverPic} = eachBookDetails
  return (
    <li className="nav-item">
      <Link to={`books/${id}`} className="link-item">
        <img src={coverPic} className="cover-pic" alt={title} />
        <div className="book-details-card">
          <h1 className="book-title">{title}</h1>
          <p className="book-author">{authorName}</p>
          <div className="rating-container">
            <p className="book-avg">Avg Rating</p>
            <BsFillStarFill color="#FBBF24" />
            <p className="book-rating">{rating}</p>
          </div>

          <p className="book-read-status">
            Status: <span className="status-color">{readStatus}</span>
          </p>
        </div>
      </Link>
    </li>
  )
}

export default ShowBookByRequest
