import {BsFillStarFill} from 'react-icons/bs'
import './index.css'

const BookItem = props => {
  const {bookDetailsList} = props
  const {
    authorName,
    coverPic,
    title,
    rating,
    readStatus,
    aboutAuthor,
    aboutBook,
  } = bookDetailsList
  return (
    <>
      <div className="coverpic-info-card">
        <img src={coverPic} alt={title} className="book-cover-pic" />
        <div className="book-details-info">
          <h1 className="book-details-title">{title}</h1>
          <p className="book-details-author-name">{authorName}</p>
          <div className="rating-cont">
            <p className="book-details-average">Avg Rating</p>
            <BsFillStarFill color="#FBBF24" />
            <p className="book-details-rating">{rating}</p>
          </div>
          <p className="book-details-read-status">
            Status:{' '}
            <span className="book-details-status-color">{readStatus}</span>
          </p>
        </div>
      </div>
      <hr />
      <div className="author-card">
        <h1 className="book-details-about-author-heading">About Author</h1>
        <p className="book-details-about-author">{aboutAuthor}</p>
      </div>
      <div>
        <h1 className="book-details-about-book-heading">About Book</h1>
        <p className="book-details-about-book">{aboutBook}</p>
      </div>
    </>
  )
}

export default BookItem
