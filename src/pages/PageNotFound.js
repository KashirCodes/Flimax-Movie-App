import { useEffect } from 'react'
import '../notfound.css'
import { FaCamera } from 'react-icons/fa'

export const PageNotFound = () => {
  useEffect(() => {
    document.title = `Page Not Found / Cinemate`
  })

  return (
    <section2>
      <h1>
        4
        <span>
          <FaCamera />
        </span>
        4
      </h1>
      <h2>Error: 404 page not found</h2>
      <p>Sorry, the page you're looking for cannot be accessed</p>
    </section2>
  )
}
