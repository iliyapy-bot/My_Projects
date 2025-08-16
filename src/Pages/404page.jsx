import {Link} from 'react-router-dom'

function NotFoundPage(){

    return (
        <div className="NotDiv">
            <h1>404</h1>
            <h2>This Page Not Found😣</h2>
            <h3>The link might be corrupted</h3>
            <Link className='goBackButton' to="/">back to home</Link>
        </div>
    )


}

export default NotFoundPage