import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Header from '../Header'
import TopRatedBooks from '../TopRatedBooks'
import Footer from '../Footer'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-page-container">
      <div className="home-content">
        <h1 className="home-heading">Find Your Next Favorite Books?</h1>
        <p className="home-descp">
          You are in the right place. Tell us what titles or genres you have
          enjoyed in the past, and we will give you surprisingly insightful
          recommendations.
        </p>
        <button type="button" className="mobile-rating-find-button">
          <Link to="/bookshelves" className="mobile-find-btn-link">
            Find Books
          </Link>
        </button>
      </div>
      <div className="top-rated-books-container">
        <div className="heading-button-cont">
          <h1 className="home-rating-heading">Top Rated Books</h1>
          <button type="button" className="rating-find-button">
            <Link to="/bookshelves" className="find-btn-link">
              Find Books
            </Link>
          </button>
        </div>
        <div className="books-slider-container">
          <TopRatedBooks />
        </div>
        <div className="mobile-books-slider-container">
          <TopRatedBooks />
        </div>
      </div>
      <Footer />
    </div>
  </>
)

export default Home
