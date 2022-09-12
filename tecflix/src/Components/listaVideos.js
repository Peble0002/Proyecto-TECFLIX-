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

    const handleUpdate = video => {
        //validación de los datos

        //Seteamos los valores automaticamente con el enlace

        if (titulo === '') {
            titulo = video.titulo
        }
        if (enlace === '') {
            titulo = video.enlace
        }
        if (emisor === '') {
            emisor = video.emisor
        }
        if (duracion === '') {
            duracion = video.duracion
        }
        if (album === '') {
            album = video.album
        }



        const requestInit = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(video)
        }
        fetch('http://localhost:8080/api/' + video.id, requestInit)
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
    const play = (enlace1, titulo) => {
        <div className="video-player">
            <iframe
                title={titulo}
                className="video-iframe"
                src={enlace1}
            />
        </div>
    }

    function Buscar() {
        var tabla = document.getElementById('tblVideo');
        var busqueda = document.getElementById('txtBusqueda').value.toLowerCase();
        var cellsOfRow="";
        var found=false;
        var compareWith="";
        for (var i = 1; i < tabla.rows.length; i++) {
            cellsOfRow = tabla.rows[i].getElementsByTagName('td');
            found = false;
            for (var j = 0; j < cellsOfRow.length && !found; j++) { compareWith = cellsOfRow[j].innerHTML.toLowerCase(); if (busqueda.length == 0 || (compareWith.indexOf(busqueda) > -1))
                {
                    found = true;
                }
            }
            if(found)
            {
                tabla.rows[i].style.display = '';
            } else {
                tabla.rows[i].style.display = 'none';
            }
        }
    }


    return (

        <div>

            <h2>Filtrando Tabla HTML con JavaScript</h2>
            <form>Busqueda: <input id="txtBusqueda" type="text" onkeyup="Buscar();" />
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
                                    <button onClick={() => handleUpdate(video)} className="btn btn-success btn-sm">Update</button>
                                </div>
                                <div className="mb-3">
                                    <button onClick={() => handleDelete(video.id_Video)} className="btn btn-danger btn-sm">Delete</button>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary btn-sm">Play</button>
                                    <>{play(video.elace, video.title)}</>
                                </div>
                                <div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
                    </div>
    );
}

export default listaVideos;