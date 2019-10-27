const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const request = require('request')
const cors= require('cors')
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist', 'my-app')))

const googlePLacesQueryUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+albany&key=AIzaSyDiWkBCSNh9EEm-FBSvnxvb5HGj4DTwOWs"

app.get('/restaurant', (req, res) => {
    request.get(googlePLacesQueryUrl)
    .pipe(res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))