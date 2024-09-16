import { Link } from "react-router-dom"
import "./notFound.scss"

const NotFound = () => {
  return (
    <div className="notFound">
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Go back to the main page</Link>
    </div>
  )
}

export default NotFound