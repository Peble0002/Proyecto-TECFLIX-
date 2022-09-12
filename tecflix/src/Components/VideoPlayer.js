import React from "react";

/**
 * 
 * Entradas: ID del video que contiene la unformacion del mismo
 * Salidas: Iframe de acuerdo a los datos de entrada, que permite reproducir el video
*
 * 
 */
const Videoplayer = ({ videoId }) => {
  if (!videoId) {
    return (
      <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
        Search for a video
      </p>
    );
  }
  return (
    <div className="video-player">
      <iframe
        title={videoId}
        className="video-iframe"
        src={`https://www.youtube.com/embed/${videoId}`}
      />
    </div>
  );
};

export default Videoplayer;