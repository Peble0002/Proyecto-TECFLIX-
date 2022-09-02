import './App.css';

import Video from './componentes/Video.js'
import Search from './componentes/Search.js'
import React, { ReactComponent } from 'react';
import youtubeApi from './api/youtube'
import VideoList from './componentes/VideoList'
import VideoPlayer from './componentes/VideoPlayer'

export default class App extends React.Component {

  state = {
      videoMetaInfo:[],
      selectedVideoId: null
  }

  onVideoSelected = videoId => {
    this.setState({
      selectedVideoId:videoId
    })
  }

  onSearch = async keyword => {
    const response = await youtubeApi.get("/search", {
      params: {
        q:keyword
      }
    })

    console.log(response)

    //Se obtiene la informacion del video
    this.setState({
      videoMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId
    })

    console.log(this.state)

  }

  render(){
  return (

    <div className='App'>
      <Search onSearch={this.onSearch} />
      <VideoList onVideoSelected={this.onVideoSelected}
      data={this.state.videoMetaInfo}/>
      <VideoPlayer videoId={this.state.selectedVideoId}/>
    </div>
  )
}
}
//   return ( // se retorna el codigo html
//     <div className="App">
//       <div className='contenedor-principal'>
//         <h1> Comentarios sobre la actuacion en Cars 1  </h1>

//         <Testimonio
//           nombre='DJ'
//           cargo='Actor'
//           imagen='dj'
//           escena='Mack en problemas'
//           testimonio=' Fue una experiencia impresionante donde pude poner mi musica para dormir a Mack '
//         />
//         <Testimonio
//           nombre='Stanley'
//           cargo='Actor fallecido'
//           imagen='stanley'
//           escena='Escenas de recuerdos de Radiator Spirngs'
//           testimonio=' Durante mi vida, siempre quise formar parte de la pelicula del rasho '
//         />
  


//         <div>


//         </div>

//       </div>
//     </div>
//   );
// }


