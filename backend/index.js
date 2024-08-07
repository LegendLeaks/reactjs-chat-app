const express = require("express");
const cors = require("cors");
const axios = require("axios");
const api_key = require("./config");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    // make a PUT call to rest.chatengine.io api
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        { username: username, secret: username, firstname : username },
        {headers: {"private-key": api_key['PRIVATE_KEY']}}
    )
    
    return res.status(r.status).json(r.data);
} catch (e) {
    // return error if specified data in api call is incorrect
    return res.status(e.response.status).json(e.response.data.error);
}
});




app.listen(3001);

