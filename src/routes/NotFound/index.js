import {Link} from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="pageWrapper">
            <h1>404 nothing found here</h1>
            <Link to="/home">Go back to home</Link>
        </div>


    )
}
export default NotFound