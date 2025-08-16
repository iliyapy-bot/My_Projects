import React, {useState} from 'react'

function MovieCard({movie}){
    
    const [showButton, setShowButton] = useState(false)
    const [bg, setBg] = useState("transparent")

    return(
        <div className="CardDiv">
            <a href="#">
                <div className="imgDiv"  onMouseOver={()=>{
                    setShowButton(true)
                    setBg("rgba(0, 0, 0, 0.363)")
                }}
                onMouseOut={()=>{
                    setShowButton(false)
                    setBg("transparent")
                }}>
                    <div className='CardWrapper' style={{backgroundColor: bg}}></div>
                    {showButton && (<button className="FaveButt">🤍</button>)}
                    <img src={`https://image.tmdb.org/t//p/w500${movie.poster_path}`} alt="movie_img" />
                </div>
            </a>
            <h2 className="movieTitle">{movie.title}</h2>
            <p className="movieDate">{movie.release_date?.split("-")[0]}</p>    
        </div>
    )
}

export default MovieCard