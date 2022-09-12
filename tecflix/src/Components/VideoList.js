import React from "react";

import Video from "./Video";

/**
 * 
 * Entradas: Video seleccionado y datos del resultado de la busqueda
 * Salidas: Lista de los videos relacionados a la busqueda, en este caso son 30
*
 * 
 */
const VideoList = ({ data, onVideoSelected }) => {
  return (
    <div className="video-list">
      <div style={{ padding: "20px 0" }}>
        <h3
          style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}
        >
         Search results
        </h3>
        <Video data={data} onVideoSelected={onVideoSelected} />
      </div>
    </div>
  );
};

export default VideoList;