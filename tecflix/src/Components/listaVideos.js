import React from "react";


const listaVideos = ({ videos }) => {
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
                        <th>{video.id_Video}</th>
                        <th>{video.titulo}</th>
                        <th>{video.emisor}</th>
                        <th>{video.duracion}</th>
                        <th>{video.album}</th>
                    </tr>
                ))}


            </tbody>
        </table>
    );
}

export default listaVideos;