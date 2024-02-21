import express from 'express'

const app = express();
const PORT = 4000;

app.get('/', (req, res) => 
    res.send(`Our application is running on port ${PORT}`)
)

app.listen(PORT, () => 
    console.log(`Your soccer server is running on port ${PORT}`)
)
