const express = require('express')
const routes = express.Router()

//Rutas get
routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM td_video', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})


// Rutas post
routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO td_video set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send("Video add")
        })
    })
})

//Rutas delete
routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM td_video WHERE id_Video = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Video excluded!')
        })
    })
})

//Rutas put
routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE td_video set ? WHERE id_Video = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Video updated!')
        })
    })
})

module.exports = routes