import React from 'react';

const Form = ({ video, setVideo }) => {

    const handleChange = e => {
        setVideo({
            ...video,
            [e.target.name]: e.target.value
        })
    }

    let { titulo, emisor, duracion, enlace, album } = video

    const handleSubmit = () => {

        //validación de los datos
        if (enlace === '') {
            alert('El Campo de Enlace es obligatorio')
            return
        }

        //consulta
        const requestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(video)
        }
        fetch('http://localhost:8080/api', requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

        //reiniciando state del video
        setVideo({
            titulo: '',
            emisor: '',
            duracion: '',
            enlace: '',
            album: ''
        })



    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="titulo" className="form-label">Video Title</label>
                <input value={titulo} name="titulo" onChange={handleChange} type="text" id="titulo" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="emisor" className="form-label">Video Transmitter</label>
                <input value={emisor} name="emisor" onChange={handleChange} type="text" id="emisor" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="duracion" className="form-label">Video Duration</label>
                <input value={duracion} name="duracion" onChange={handleChange} type="text" id="duracion" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="enlace" className="form-label">Video Link* </label>
                <input value={enlace} name="enlace" onChange={handleChange} type="text" id="enlace" className="form-control" />
                
            </div>
            <p class="text-left" >The Link Field is required*</p>
            <div className="mb-3">
                <label htmlFor="album" className="form-label">Video album</label>
                <input value={album} name="album" onChange={handleChange} type="text" id="album" className="form-control"/>
            </div>
           
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Form;