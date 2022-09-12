import './App.css';

import Video from './Components/Video.js'
import Search from './Components/Search.js'
import React, { ReactComponent } from 'react';
import youtubeApi from './api/youtube'
import VideoList from './Components/VideoList'
import VideoPlayer from './Components/VideoPlayer'
import App1 from './App1';

export default class App extends React.Component {

  state = {
    videoMetaInfo: [],
    selectedVideoId: null
  }

  onVideoSelected = videoId => {
    this.setState({
      selectedVideoId: videoId
    })
  }

  onSearch = async keyword => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword
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

  render() {
    return (
      <html>
        <body>
          <h1>TECFLIX</h1>
          <App1></App1>

          <div className="container">
            <div className="row">
              <div className="col-7">
              <Search onSearch={this.onSearch} />
              <VideoPlayer videoId={this.state.selectedVideoId} />
                
              </div>
              <div className="col-5"></div>
              
                <VideoList onVideoSelected={this.onVideoSelected}
                  data={this.state.videoMetaInfo} />
            </div>
            <div />
          </div>
        </body>
      </html>
    )
  }
}


