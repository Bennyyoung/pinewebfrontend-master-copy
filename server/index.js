const app = require("express")();
const cors = require("cors")


const PORT = process.env.PORT || 5000;


app.use(cors({
    origin: "*",
    methods: ['GET', 'POST'] ,
    credentials: true
}));

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
});