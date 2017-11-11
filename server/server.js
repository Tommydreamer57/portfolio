const express = require('express')

const app = express()

const PORT = 3003


app.use(express.static(`${__dirname}/../`))


app.listen(PORT, () => console.log(`portfolio running on port ${PORT}`))
