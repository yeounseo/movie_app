import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


// 메인 컴포넌트가 데이터를 다 가지고 있는 것 ! 
// 타이틀 , 영화 포스터 정보를 메인에 다 넣고
// 그걸 각각 컴포넌트에 props를 이용해 정보를 출력 !
// big component => data -> children component [props]


class App extends Component {

  // Render 의 3가지(Mount , render , DidMount)는 컴포넌트가 '존재'할때부터 시작한다.
  // Render : componentWillMount() -> render() -> componentDidMount()

  // Update : componentWillReceiveProps() -> shouldComponentUpdate() ->
  //           componentWillUpdate() -> render() -> componentDidUpdate()


  // ex) 영화 앱에서는 WillMount할때 API를 불러오자
  // componentWillMount(){
  //   console.log("componentWillMount");

  // }

  // // ex) 성공적으로 컴포넌트가 자리 잡았음
  // componentDidMount(){
  //   console.log("componentDidMount");

  // }

  // state가 바뀔때 마다 , 컴포넌트는 다시 render 한다.
  // 새로운 state와 함께
  state = {}

  //컴포넌트가 mount하면 , 페이지 로드 후 1초후에, 00 작업(새로운 영화)이 보여진다.
  componentDidMount() {
    this._getMovies();

    // setTimeout(() => {
    //   this.setState({
    //     movies: [
    //       {
    //         title:"Matrix",
    //         poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/The_Matrix_soundtrack_cover.jpg/220px-The_Matrix_soundtrack_cover.jpg"
    //       },
    //       {
    //         title: "Full Metal Jacket",
    //         poster: "https://cdn.shopify.com/s/files/1/0784/1125/products/Full_Metal_Jacket_2048x.jpg?v=1530145558"
    //       },
    //       {
    //         title: "Oldboy",
    //         poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
    //       },
    //       {
    //         title: "Star Wars",
    //         poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    //       },
    //       {
    //         title: "Star Wars2",
    //         poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    //       }
    //     ]
    //       // // 이전 영화 리스틀르 두고, 영화 한개를 추가하기 위해 아래와 같이 작성
    //       // ...this.state.movies,
    //       // {
    //       //   title: "Star Wars2",
    //       //   poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    //       // }
    //   })
    // }, 5000)
  }

  // _ 를 앞에 작성한 이유는 리액트의 기능이 많아서 차별하기 위해
  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return <Movie
        title={movie.title_english}
        poster={movie.large_cover_image}
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
      />
    })
    return movies
  }

  //  async , await  ->  동기적으로 await한 _callApi()가 작동한 후에 실행되도록 작성한 코드이다.
  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=like_count')
      // fetch를 ajax를 불러올수 있다. 손쉽게
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err))
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={ movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
