const express = require("express");

const app = express();

app.get('/api', (req, res) => {
        res.json({
            msg: "Api is working"
        })
})

app.listen(3000, () => {
    console.log(`Server is listen 3000`);
    
})