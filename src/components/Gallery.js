
function Gallery(props) {
    return (
        <div className='container'>
            <div className="movie-list">
                {props.list.map(movie => (
                    <div key={movie.index}>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;