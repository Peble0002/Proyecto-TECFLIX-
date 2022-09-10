import './App.css';

import Video from './Components/Video.js'
import Search from './Components/Search.js'
import React, { ReactComponent } from 'react';
import youtubeApi from './api/youtube'
import VideoList from './Components/VideoList'
import VideoPlayer from './Components/VideoPlayer'

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
      <div id="menubar">
        <ul id="menu">
          <li class="selected"><a href="App.js">Inicio</a></li>
          <li><a href="App1.js">Mis Videos</a></li>
        </ul>
      </div>
      <Search onSearch={this.onSearch} />
      <VideoList onVideoSelected={this.onVideoSelected}
      data={this.state.videoMetaInfo}/>
      <VideoPlayer videoId={this.state.selectedVideoId}/>
    </div>
  )
}
}


