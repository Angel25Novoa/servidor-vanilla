console.clear()
import {createServer} from 'http'

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

httpServer.listen(3000)

