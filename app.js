console.clear()
import {createServer} from 'http'
import express from 'express'

const PORT = 3080
const expressApp = express()
expressApp.use(express.json())
expressApp.use(express.text())

expressApp.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

expressApp.post('/cuenta', (req, res) => {
    console.log(req.body)
    res.send()
})

expressApp.put('/producto', (req, res) => {
    console.log(req.body)
    res.send()
})

// const httpServer = createServer((req, res) => {
//     // console.log(req.method, req.url, req.headers)
//     let data = ''
//     let chunkIndex = 0
//     req.on('data', (chunk) => {
//         data += chunk
//         chunkIndex++
//         console.log(chunkIndex)
//     })
//     req.on('end', () => {
//         console.log(data)
//         res.end('Hello World')
//     })

// })

// httpServer.listen(3000)

