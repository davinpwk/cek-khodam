import express from "express"
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://random.dog/woof.json";

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

app.get("/", async (req,res) => {
    res.render("index.ejs");
})

app.post("/", async(req,res) => {
    console.log(req.body.name);
    try{
        const result = await axios.get(API_URL);
        const khodamUrl = result.data.url;
        console.log(khodamUrl);
        res.render("index.ejs", {name: req.body.name, khodamUrl: khodamUrl});
    } catch(error){
        console.log(error.message);
    }
    // res.render("index.ejs", {name : req.body.name});
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})