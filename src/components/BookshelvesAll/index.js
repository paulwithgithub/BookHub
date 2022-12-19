import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'

import Cookies from 'js-cookie'

import {AiOutlineSearch} from 'react-icons/ai'
import Header from '../Header'
import BookshefFilters from '../BookshefFilters'
import ShowBookByRequest from '../ShowBookByRequest'
import Footer from '../Footer'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const bookshelvesList = [
  {
    id: '22526c8e-680e-4419-a041-b05cc239ece4',
    value: 'ALL',
    label: 'All',
  },
  {
    id: '37e09397-fab2-46f4-9b9a-66b2324b2e22',
    value: 'READ',
    label: 'Read',
  },
  {
    id: '2ab42512-3d05-4fba-8191-5122175b154e',
    value: 'CURRENTLY_READING',
    label: 'Currently Reading',
  },
  {
    id: '361d5fd4-9ea1-4e0c-bd47-da2682a5b7c8',
    value: 'WANT_TO_READ',
    label: 'Want to Read',
  },
]
class BookshelvesAll extends Component {
  state = {
    booksList: [],
    apiStatus: apiStatusConstants.initial,
    inputSearchBooks: '',
    activeShelfId: 'ALL',
    showShelfHeading: 'All Books',
  }

  componentDidMount() {
    this.getAllBooks()
  }

  getAllBooks = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const token = Cookies.get('jwt_token')
    const {inputSearchBooks, activeShelfId} = this.state
    const apiUrl = `https://apis.ccbp.in/book-hub/books?shelf=${activeShelfId}&search=${inputSearchBooks}`

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()

      const updatedData = data.books.map(book => ({
        authorName: book.author_name,
        coverPic: book.cover_pic,
        id: book.id,
        rating: book.rating,
        readStatus: book.read_status,
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

  renderAllBooks = () => {
    const {booksList, inputSearchBooks} = this.state
    if (booksList.length === 0) {
      return (
        <div className="search-not-found-container">
          <img
            src="https://res.cloudinary.com/dlbaf9ix7/image/upload/v1669623733/GroupNotFound_gkle7r.png"
            alt="not found"
            className="search-not-found-image"
          />
          <p className="search-not-found-descp">
            Your search for {inputSearchBooks} did not find any matches.
          </p>
        </div>
      )
    }
    return (
      <>
        <ul className="book-shelves-lists">
          {booksList.map(eachBook => (
            <ShowBookByRequest eachBookDetails={eachBook} key={eachBook.id} />
          ))}
        </ul>
      </>
    )
  }

  onSearchBooks = event => {
    this.setState({inputSearchBooks: event.target.value})
  }

  onClickSearchBtn = () => {
    this.getAllBooks()
  }

  renderBooksLoadingView = () => (
    <div
      className="loader-container"
      // testid="loader"
    >
      <Loader type="TailSpin" color="#0284C7" height={50} width={50} />
    </div>
  )

  renderFailureView = () => (
    <div className="error-view-book-container">
      <img
        src="https://res.cloudinary.com/dlbaf9ix7/image/upload/v1669623882/Group_7522something_went_wrong_mkphrr.png"
        alt="books-error"
        className="error-img"
      />
      <h1 className="error-heading-text">
        Something Went Wrong Please try again.
      </h1>
      <button
        type="button"
        onClick={this.getAllBooks}
        className="try-again-button"
      >
        Try Again
      </button>
    </div>
  )

  renderBooks = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderAllBooks()
      case apiStatusConstants.inProgress:
        return this.renderBooksLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  onChangeBookshelf = activeShelfId => {
    const showText = bookshelvesList.filter(
      object => object.value === activeShelfId,
    )
    this.setState(
      {
        activeShelfId,
        showShelfHeading: showText[0].label,
      },
      this.getAllBooks,
    )
  }

  onChangeMobileBookshelf = activeShelfId => {
    this.setState(
      {
        activeShelfId,
      },
      this.getAllBooks,
    )
  }

  rendedBookshelfNameList = () => {
    const {activeShelfId} = this.state
    return (
      <>
        <BookshefFilters
          bookshelvesList={bookshelvesList}
          onChangeBookshelf={this.onChangeBookshelf}
          activeShelfId={activeShelfId}
        />
      </>
    )
  }

  render() {
    const {activeShelfId, showShelfHeading} = this.state

    return (
      <>
        <Header />
        <div className="bookshelves-container">
          <div className="mobile-searchbar-heading-container">
            <div className="mobile-searchbar-block">
              <input
                type="search"
                placeholder="Search"
                className="mobile-search-bar"
                onChange={this.onSearchBooks}
              />
              <button
                type="button"
                className="mobile-search-icon-box"
                onClick={this.onClickSearchBtn}
              >
                <AiOutlineSearch />
              </button>
            </div>
          </div>
          <h1 className="mobile-bookshelves-main-heading">Bookshelves</h1>

          <div className="mobile-bookshelf-list-names">
            {this.rendedBookshelfNameList()}
          </div>
          <div className="sidebar-container">
            <h1 className="bookshelves-main-heading">Bookshelves</h1>
            {this.rendedBookshelfNameList()}
          </div>
          <div className="all-books-from-data-container">
            <div className="searchbar-heading-container">
              <h1 className="bookshelves-heading">{showShelfHeading}</h1>

              <div className="searchbar-block">
                <input
                  type="search"
                  placeholder="Search"
                  className="search-bar"
                  onChange={this.onSearchBooks}
                />
                <button
                  type="button"
                  className="search-icon-box"
                  onClick={this.onClickSearchBtn}
                >
                  <AiOutlineSearch />
                </button>
              </div>
            </div>
            <div className="fetched-books">{this.renderBooks()}</div>

            <div className="bookshelves-contact-information">
              <div className="bookshelves-social-images-cont">
                <FaGoogle color="#3D3C3C" />
                <FaTwitter color="#3D3C3C" />
                <FaInstagram color="#3D3C3C" />
                <FaYoutube color="#3D3C3C" />
              </div>
              <p className="bookshelves-contact-us">Contact Us</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default BookshelvesAll
