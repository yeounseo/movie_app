import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis';

// class Movie extends Component {

//     //아래의 porpsTypes를 이용해 부모 컴포넌트가 얻는 정보의 종류가
//     // 무엇인지 , 있는지 없는지 알수 있다!
//     static propsTypes = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired
//     }

//     render() {
//         return (
//             <div>
//                 <MoviePoster poster={this.props.poster}/>
//                 <h1>{this.props.title}</h1>
//             </div>
//         ) 
//     }
// }

// class MoviePoster extends Component {

//     //ex) API를 통해 정보를 불러온다면 , 유저 이름은 string이고, 필수요건 ! 
//     static propsTypes = {
//         poster: PropTypes.string.isRequired
//     }

//     render() {
//         return (
//             <img src={this.props.poster} />
//         )
//     }
// }
// functional component

// functional component를 이용하는 경우는 return 만 있으면 된다.
// 하지만 state는 잃게 된다. 
// 업데이트가 필요한 부분에서는 state가 필요하기 때문에 functional              component는 사용하지 않지만 , 지금 movie poster와 같은 부분은 사용해도       무관하다.
function Movie({ title, poster, genres, synopsis }) {
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} /> )}
                </div>
                <div className="Movie__Synopsis">
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis= ' ...'
                    trimRight
                    basedOn='letters'
                />
                </div>
            </div>
        </div>
    )
}

function MoviePoster({ poster, alt }) {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}

function MovieGenre({ genre }) {
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;