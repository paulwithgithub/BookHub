import {Component} from 'react'
import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'

import Cookies from 'js-cookie'
import BookItem from '../BookItem'

import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class BookDetails extends Component {
  state = {bookDetailsList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getBookDetails()
  }

  getBookDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const token = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const url = `https://apis.ccbp.in/book-hub/books/${id}`

    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()

      const updatedData = {
        aboutAuthor: data.book_details.about_author,
        aboutBook: data.book_details.about_book,
        authorName: data.book_details.author_name,
        coverPic: data.book_details.cover_pic,
        id: data.book_details.id,
        rating: data.book_details.rating,
        title: data.book_details.title,
        readStatus: data.book_details.read_status,
      }
      this.setState({
        bookDetailsList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  render() {
    const {bookDetailsList} = this.state
    return (
      <>
        <Header />
        <div className="container">
          <div className="book-details-container">
            <BookItem bookDetailsList={bookDetailsList} />
          </div>

          <div className="book-details-contact-information">
            <Footer />
          </div>
        </div>
      </>
    )
  }
}

export default BookDetails
