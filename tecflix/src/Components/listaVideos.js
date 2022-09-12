import React from "react";
import Videoplayer from "./VideoPlayer";


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

    const handleUpdate = (id, titulo1, emisor1, duracion1, enlace1, album1) => {
        //validación de los datos

        //Seteamos los valores automaticamente con el enlace

        
        if (titulo === '') {
            titulo = titulo1
        }
        if (emisor === '') {
            emisor = emisor1
        }
        if (enlace === '') {
            enlace = enlace1
        }
        if (duracion === '') {
            duracion = duracion1
        }
        if (album === '') {
            album = album1
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
    const play =  (titulo2, emisor2, duracion2, enlace2, album2) => {
        //seteamos los valor de Video para la reproducion del mismo
        setVideo({
            titulo: titulo2,
            emisor: emisor2,
            duracion: duracion2,
            enlace: enlace2,
            album: album2
        })
        setListUpdated(true)
    }

    function Buscar() {
        var tabla = document.getElementById('tblVideo');
        var busqueda = document.getElementById('txtBusqueda').value.toLowerCase();
        var cellsOfRow = "";
        var found = false;
        var compareWith = "";
        for (var i = 1; i < tabla.rows.length; i++) {
            cellsOfRow = tabla.rows[i].getElementsByTagName('td');
            found = false;
            for (var j = 0; j < cellsOfRow.length && !found; j++) {
                compareWith = cellsOfRow[j].innerHTML.toLowerCase(); if (busqueda.length == 0 || (compareWith.indexOf(busqueda) > -1)) {
                    found = true;
                }
            }
            if (found) {
                tabla.rows[i].style.display = '';
            } else {
                tabla.rows[i].style.display = 'none';
            }
        }
    }


    return (

        <div>

            <h5>Filter</h5>
            <form>Search: <input id="txtBusqueda" type="text" onkeyup="Buscar();" />
                <button onClick={() => Buscar()} className="btn btn-success btn-sm">Buscar</button>

            </form>

            <table className="table dataTables" id="tblVideo">

                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Transmitter</th>
                        <th>Duration</th>
                        <th>Album</th>
                    </tr>
                </thead>
                <tbody>
                    {videos.map(video => (
                        <tr key={video.id_Video}>
                            <td>{video.titulo}</td>
                            <td>{video.emisor}</td>
                            <td>{video.duracion}</td>
                            <td>{video.album}</td>
                            <td>
                                <div className="mb-3">
                                    <button onClick={() => handleUpdate(video.id_Video, video.titulo, video.emisor, video.duracion, video.enlace, video.album)}
                                        className="btn btn-success btn-sm">Update</button>
                                </div>
                                <div className="mb-3">
                                    <button onClick={() => handleDelete(video.id_Video)} className="btn btn-danger btn-sm">Delete</button>
                                </div>
                                <div className="mb-3">
                                    <button onClick={() => play(video.titulo, video.emisor, video.duracion, video.enlace, video.album)}
                                     className="btn btn-primary btn-sm">Play</button>

                                </div>
                                <div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div>
                <div className="video-player">
                    <iframe
                        title={video.titulo}
                        className="video-iframe"
                        src={`https://www.youtube.com/embed/${video.titulo.substr(32,100)}`}
                    />
                </div>

            </div>
        </div>
    );
}

export default listaVideos;