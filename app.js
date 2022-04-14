console.clear()
import {createServer} from 'http'
import express from 'express'

const PORT = 3080
const expressApp = express()

expressApp.listen(3000, () => {
    console.log(`Listening on port ${PORT}`)
})

expressApp.get('/saludar', (req, res) => {
    res.send('Hola mundo') 
})

const httpServer = createServer((req, res) => {
    // console.log(req.method, req.url, req.headers)
    let data = ''
    let chunkIndex = 0
    req.on('data', (chunk) => {
        data += chunk
        chunkIndex++
        console.log(chunkIndex)
    })
    req.on('end', () => {
        console.log(data)
        res.end('Hello World')
    })

})

// httpServer.listen(3000)

