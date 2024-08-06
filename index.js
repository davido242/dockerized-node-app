const app = require('express')();

app.get('/', (req, res) => {
    res.json({ message: "Docker is easy brov" });
});

app.listen(3000, () => {
    console.log(`App is listening on port 3000`)
})