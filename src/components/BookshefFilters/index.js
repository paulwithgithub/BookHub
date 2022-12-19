import './index.css'

const BookshefFilters = props => {
  const renderShelfNamesLists = () => {
    const {bookshelvesList} = props

    return bookshelvesList.map(shelf => {
      const {onChangeBookshelf, activeShelfId} = props
      const {value, label} = shelf
      const onClickShelf = () => onChangeBookshelf(value, label)
      const isActive = activeShelfId === shelf.value
      const authorClassNames = isActive
        ? `shelf-name active-shelf-name`
        : `shelf-name `
      const listItemClassnames = isActive
        ? 'shelf-item active-shelf-item'
        : 'shelf-item'

      return (
        <li
          className={listItemClassnames}
          key={shelf.id}
          onClick={onClickShelf}
        >
          <h1 className={authorClassNames}>{shelf.label}</h1>
        </li>
      )
    })
  }

  const renderChangeShelf = () => (
    <>
      <ul className="shelfs-names-list">{renderShelfNamesLists()}</ul>
    </>
  )

  return <>{renderChangeShelf()}</>
}

export default BookshefFilters
