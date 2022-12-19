import './index.css'

const TopRatedBookItem = props => {
  const {bookDetails} = props
  const {title, coverPic, authorName} = bookDetails

  return (
    <div className="book-details">
      <img src={coverPic} alt={title} className="book-cover" />
      <h1 className="title">{title}</h1>
      <p className="author-name">{authorName}</p>
    </div>
  )
}

export default TopRatedBookItem
