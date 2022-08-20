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
        if (titulo === '' || emisor === '' || duracion === '' || enlace === '' || album === '') {
            alert('Todos los campos son obligatorios')
            return
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
                    <th>Titulo</th>
                    <th>Emisor</th>
                    <th>Duracion</th>
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
                                <button onClick={() => handleDelete(video.id)} className="btn btn-danger">Delete</button>
                            </div>
                            <div className="mb-3">
                                <button onClick={() => handleUpdate(video.id)} className="btn btn-dark">Update</button>
                            </div>
                        </td>
                    </tr>

                ))}


            </tbody>
        </table>
    );
}

export default listaVideos;