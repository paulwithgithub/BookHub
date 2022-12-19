import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://res.cloudinary.com/dlbaf9ix7/image/upload/v1669623825/Group_7484Page_Not_Found_ztpvng.png"
      alt="not found"
      className="not-found-img"
    />
    <h1 className="heading">Page Not Found</h1>
    <p className="not-found-descp">
      we are sorry, the page you requested could not be found,Please go back to
      the home page.
    </p>

    <Link to="/" className="not-found-link-item">
      <p className="to-home-btn" type="button">
        {' '}
        Go Back to Home
      </p>
    </Link>
  </div>
)

export default NotFound
