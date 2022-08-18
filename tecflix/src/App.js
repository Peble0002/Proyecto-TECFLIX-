import React, { Fragment, useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import listaVideos from './Components/listaVideos';


function  App(){

  const [videos, setVideos] = useState([])

  useEffect(() => {
      const getVideo=()=>{
        fetch('http://localhost:8080/api')
        .then(res => res.json())
        .then(res => setVideos(res))
      }
      getVideo();
    }, [])
  

    return (
      <Fragment>
     <Navbar brand='Canciones'/>
     <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{textAlign: 'center'}}>Lista de Videos</h2>
            <listaVideos videos={videos}/>
            
          </div>
          <div className="col-5">
            <h2 style={{textAlign: 'center'}}>Agregar Video</h2>
            
            
          </div>
        </div>
      </div>
      </Fragment>
      
    );

//<video={video} setVideo={setVideo}/>
}

export default App;
