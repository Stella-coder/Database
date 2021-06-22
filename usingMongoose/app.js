const express = require("express")
const mongoose = require("mongoose")
const gameRouter = require("./gameRouter")

const port = 4000

const app = express()
app.use(express.json())

mongoose.connect(
    "mongodb+srv://L5bjWCPqd6IHur0Q:L5bjWCPqd6IHur0Q@backend.es1b8.mongodb.net/gameDB?retryWrites=true&w=majority",
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
}
)

mongoose.connection.once("open",()=>{
    console.log("DB is now sucessfully connected")
}).on("error",() => {
    console.log("Error while trying to connect")
})

app.use("/api", gameRouter)
app.get("api",gameRouter)

app.listen(port, ()=>{
    console.log(`Server is listening to port ${port}`)
})