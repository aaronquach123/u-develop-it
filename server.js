const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

//Middleware

app.use(express.urlencoded({ extended: false}));

app.use(express.json());

//Routes


app.use((req, res) =>  {
    res.status(404).end();
})

//Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});