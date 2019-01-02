import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

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
function Movie({title, poster}){
    return (
        <div>
            <MoviePoster poster={poster}/>
            <h1>{title}</h1>
        </div>
    )
}

function MoviePoster({poster}){
    return (
        <img src={poster} alt="Movie Poster" />
    )
}

Movie.PropTypes = {
    title:  PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

MoviePoster.PropTypes = {
    poster: PropTypes.string.isRequired
}

export default Movie