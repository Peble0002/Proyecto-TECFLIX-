import React, { Fragment, useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import listaVideos from './Components/listaVideos';

function  App(){

  const [video, setVideo] = useState({
    album: '',
    titulo: '',
    emisor: '',
    duracion: 0,
    enlace: ''
  })

  const [videos, setVideos] = useState([])
  const [listUpdated, setListUpdated] = useState(false)

  useEffect(() => {
      const getVideo=()=>{
        fetch('http://localhost:8080/api')
        .then(res => res.json())
        .then(res => setVideos(res))
      }
      getVideo();
      setListUpdated(false)
    }, [listUpdated])
  

    return (
      <Fragment>
     <Navbar brand='Canciones'/>
     <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{textAlign: 'center'}}>Lista de Videos</h2>
            <listaVideos video={video} setVideos={setVideos} videos={videos} setListUpdated={setListUpdated}/>
          </div>
          <div className="col-5">
            <h2 style={{textAlign: 'center'}}>Agregar Video</h2>
            <Form video={video} setVideo={setVideo}/>
          </div>
        </div>
      </div>
      </Fragment>
      
    );


}

export default App;
