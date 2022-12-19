import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import BooksSlider from '../BooksSlider'
import BooksSliderMobile from '../BooksSliderMobile'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TopRatedBooks extends Component {
  state = {booksList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTopRatedBooks()
  }

  getTopRatedBooks = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const token = Cookies.get('jwt_token')

    const options = {
      headers: {Authorization: `Bearer ${token}`},
      method: 'GET',
    }
    const url = 'https://apis.ccbp.in/book-hub/top-rated-books'
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()

      const updatedData = data.books.map(book => ({
        authorName: book.author_name,
        coverPic: book.cover_pic,
        id: book.id,
        title: book.title,
      }))
      this.setState({
        booksList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderTopRatedBooks = () => {
    const {booksList} = this.state

    return (
      <>
        <div className="to-slider-cont">
          <BooksSlider booksList={booksList} />
        </div>
        <div className="to-mobile-slider-cont">
          <BooksSliderMobile booksList={booksList} />
        </div>
      </>
    )
  }

  renderLoadingView = () => (
    <div
      className="loader-container"
      // testid="loader"
    >
      <Loader type="TailSpin" color="#0284C7" height={50} width={50} />
    </div>
  )

  renderFailureView = () => (
    <div className="error-view-container">
      <img
        src="https://res.cloudinary.com/dlbaf9ix7/image/upload/v1669623882/Group_7522something_went_wrong_mkphrr.png"
        alt="all-books-error"
        className="failure-img"
      />
      <h1 className="failure-heading-text">
        Something Went Wrong Please try again.
      </h1>
      <button
        type="button"
        onClick={this.getTopRatedBooks}
        className="try-again-btn"
      >
        Try Again
      </button>
    </div>
  )

  renderBooks = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTopRatedBooks()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return <div className="all-top-rated-books">{this.renderBooks()}</div>
  }
}

export default TopRatedBooks
