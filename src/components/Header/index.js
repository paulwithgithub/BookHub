import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillCloseCircle} from 'react-icons/ai'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://res.cloudinary.com/dlbaf9ix7/image/upload/v1669624236/web_logo_gexcff.png"
              alt="website logo"
            />
          </Link>

          <Popup
            modal
            trigger={
              <button className="hamburger-icon-button" type="button">
                <GiHamburgerMenu size="30" />
              </button>
            }
            className="popup-content"
          >
            {close => (
              <div className="modal-container">
                <ul className="popup-headings-list">
                  <li className="popup-home">
                    <Link to="/" className=" nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="popup-bookshelves">
                    <Link to="/bookshelves" className="bookshelves nav-link">
                      Bookshelves
                    </Link>
                  </li>
                </ul>
                <button
                  type="button"
                  className="logout-mobile-btn"
                  onClick={onClickLogout}
                >
                  Logout
                </button>
                <button
                  className="close-button"
                  type="button"
                  onClick={() => close()}
                >
                  <AiFillCloseCircle size="28" color="#334155" />
                </button>
              </div>
            )}
          </Popup>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://res.cloudinary.com/dlbaf9ix7/image/upload/v1669624236/web_logo_gexcff.png"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="home nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/bookshelves" className="bookshelves nav-link">
                Bookshelves
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
