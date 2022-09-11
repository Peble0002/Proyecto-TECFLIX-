import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar'
import ListaVideos from './Components/listaVideos'
import Form from './Components/formVideo';



function App1() {


  const [video, setVideo] = useState({
    titulo: '',
    emisor: '',
    duracion: '',
    enlace: '',
    album: ''
  })


  const [videos, setVideos] = useState([])

  const [listUpdated, setListUpdated] = useState(false)

  useEffect(() => {
    const getVideo = () => {
      fetch('http://localhost:8080/api')
        .then(res => res.json())
        //.then(res => console.log(res))
        .then(res => setVideos(res))
    }
    getVideo();
    setListUpdated(false)
  }, [listUpdated])


  return (



    <div className="container">
      <div>
        <div className="row">
          <div className="col-7">
            <h2 style={{ textAlign: 'center' }}>Videos</h2>
            <ListaVideos video={video} setVideo={setVideo} videos={videos} setListUpdated={setListUpdated} />
          </div>
          <div className="col-5">
            <h2 style={{ textAlign: 'center' }}>Video Add</h2>
            <Form video={video} setVideo={setVideo} />
          </div>
        </div>
      </div>
    </div>


  );

  //<video={video} setVideo={setVideo}/>

}

export default App1;
