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
        if (titulo === '' || emisor === '' || duracion === '' || enlace === '' || album === '') {
            alert('Todos los campos son obligatorios')
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
                <label htmlFor="title" className="form-label">Video Link </label>
                <input value={enlace} name="enlace" onChange={handleChange} type="text" id="enlace" className="form-control" />
            </div>
           
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Form;