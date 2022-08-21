import React from "react";


const listaVideos = ({ video, setVideo, videos, setListUpdated }) => {

    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:8080/api/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

        setListUpdated(true)
    }

    let { titulo, emisor, duracion, enlace, album } = video

    const handleUpdate = id => {
        //validación de los datos
        if (enlace === '') {
            alert('The Link Field is required')
            return
        }
        //Seteamos los valores automaticamente con el enlace
        //titulo: '',
          //  emisor: '',
            //duracion: '',
            //album: 
            if (titulo === '') {
                titulo =''     
            }
            if (emisor === '') {
                emisor =''     
            }
            if (duracion === '') {
                duracion =''     
            }
            if (album === '') {
                album =''     
            }
           
    
        
        const requestInit = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(video)
        }
        fetch('http://localhost:8080/api/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

        //reiniciando state de libro
        setVideo({
            titulo: '',
            emisor: '',
            duracion: '',
            enlace: '',
            album: ''
        })

        setListUpdated(true)
    }




    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Transmitter</th>
                    <th>Duration</th>
                    <th>Album</th>
                </tr>
            </thead>
            <tbody>
                {videos.map(video => (
                    <tr key={video.id_Video}>
                        <td>{video.id_Video}</td>
                        <td>{video.titulo}</td>
                        <td>{video.emisor}</td>
                        <td>{video.duracion}</td>
                        <td>{video.album}</td>
                        <td>
                            <div className="mb-3">
                                <button onClick={() => handleUpdate(video.id_Video)} className="btn btn-success">Update</button>
                            </div>
                            <div className="mb-3">
                                <button onClick={() => handleDelete(video.id_Video)} className="btn btn-danger">Delete</button>
                            </div>

                        </td>
                    </tr>

                ))}


            </tbody>
        </table>
    );
}

export default listaVideos;