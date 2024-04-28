const express = require("express");
const app = express();


let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// app.use((req, res) => {
//     console.log("request, received");
//     res.send({
//         name: "apple",
//         color: "red",
//     });

//     let code = "<h1>Fruits</h1> <ul><li>apple</li><li>mango</li></ul>";
//     res.send(code);
// });

app.get("/", (req, res) => {
    res.send("Hello i am root");
});

// app.get("/apple", (req, res) => {
//     res.send("You contacted apple path");
// });

// app.get("/orange", (req, res) => {
//     res.send("You contacted orange path");
// });

// app.get("*", (req, res) => {
//     res.send("This path doesnot exist");
// });

// app.post("/", (req, res) => {
//     res.send("You sent a post request to root");
// });

// app.get("/:username/:id", (req, res) => {
//     // console.log(req.params);
//     let { username, id } = req.params;
//     let htmlstr = `<h1>Welcome to the page of @${username}.</h1>`;
//     res.send(htmlstr);
// });


app.get("/search", (req, res) => {
    // console.log(req.query);
    let {q} = req.query;
    if(!q) {
        res.send(`<h1>nothing search</h1>`);
    }
    res.send(`<h1>search results for query: ${q}</h1>`);
});