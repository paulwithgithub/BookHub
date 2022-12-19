// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import TopRatedBookItem from '../TopRatedBookItem'

const BooksSlider = props => {
  const settings = {
    dots: false,
    slidesToScroll: 2,
    slidesToShow: 5,
    infinite: true,
  }
  const {booksList} = props

  return (
    <>
      <Slider {...settings}>
        {booksList.map(eachBook => (
          <TopRatedBookItem key={eachBook.id} bookDetails={eachBook} />
        ))}
      </Slider>
    </>
  )
}

export default BooksSlider
