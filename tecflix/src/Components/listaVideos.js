import React from "react";


const listaVideos = ({videos}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Album</th>
                    <th>Titulo</th>
                    <th>Emisor</th>
                    <th>Duracion</th>
                    <th>Enlace</th>
                </tr>
            </thead>
            <tbody>
                {videos.map(video=>(
                <tr key={video.id}>
                    <th>{video.Album}</th>
                    <th>{video.Titulo}</th>
                    <th>{video.Emisor}</th>
                    <th>{video.Duracion}</th>
                    <th>{video.Enlace}</th>
                </tr>
               ))}
            </tbody>
        </table>
    );
}

export default listaVideos;