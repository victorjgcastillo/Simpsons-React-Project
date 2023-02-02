import React from 'react'

const Paginator = ({page, setPage, maxPage}) => {
  return (
    <div>
      {page > 1 && <button onClick={() => setPage(page - 1)}>-</button>}
      {page}
      {page < 20 && <button onClick={() => setPage(page + 1)}>+</button>}
    </div>
  )
}

export default Paginator
