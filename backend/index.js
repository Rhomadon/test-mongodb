import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import ProductRoute from "./routes/ProductRoute.js"

const app = express()
const port = 5000

mongoose.connect('mongodb://localhost:27017/mern_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Database Connected...'))

app.use(cors())
app.use(express.json())
app.use(ProductRoute)

app.listen(port, () => console.log('Server: http://localhost:'+port))