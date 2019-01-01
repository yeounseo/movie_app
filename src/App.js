import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


// 메인 컴포넌트가 데이터를 다 가지고 있는 것 ! 
// 타이틀 , 영화 포스터 정보를 메인에 다 넣고
// 그걸 각각 컴포넌트에 props를 이용해 정보를 출력 !
// big component => data -> children component [props]

const movies = [
  {
    title:"Matrix",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/The_Matrix_soundtrack_cover.jpg/220px-The_Matrix_soundtrack_cover.jpg"
  },
  {
    title: "Full Metal Jacket",
    poster: "https://cdn.shopify.com/s/files/1/0784/1125/products/Full_Metal_Jacket_2048x.jpg?v=1530145558"
  },
  {
    title: "Oldboy",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
  },
  {
    title: "Star Wars",
    poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  }
]

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

  render() {
    
    return (
       <div className="App">
         {movies.map((movie, index) => {
           return <Movie title={movie.title} poster={movie.poster} key={index} />
         })}
       </div>
    );
  }
}

export default App;
