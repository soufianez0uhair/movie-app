export default function Movie(props) {
    const IMG_API = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'
    return (
        <div className="movie">
            <img src={props.img ? IMG_API + props.img : 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} className="movie__img" />
            <div className="movie__details">
                <h2 className="movie__title">{props.title}</h2>
                <span className="movie__badge" style={{color: props.vote_average < 6 ? 'red' : 'green'}}>{props.vote_average}</span>
            </div>
            <div className="movie__overview">
                <h2>overview</h2>
                <p>{props.overview}</p>
            </div>
        </div>
    )
}