import React, { Fragment, useState, useEffect} from 'react';
import Navbar from './Components/Navbar'
import ListaVideos from './Components/listaVideos'


function App() {

  const [videos, setVideos] = useState([])

  useEffect(() => {  
    const getVideo = () => {
     fetch('http://localhost:8080/api')
       .then(res => res.json())
       //.then(res => console.log(res))
       .then(res => setVideos(res))
   }
    getVideo();
  }, [])


  return (
    <Fragment>
      <Navbar brand='Video List' />
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{ textAlign: 'center' }}>Videos</h2>
            <ListaVideos videos={videos} />
          </div>
          <div className="col-5">
            <h2 style={{ textAlign: 'center' }}>Video Add</h2>


          </div>
        </div>
      </div>
    </Fragment>

  );

  //<video={video} setVideo={setVideo}/>
}

export default App;
