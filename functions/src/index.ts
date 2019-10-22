import * as functions from 'firebase-functions';
const axios = require('axios').default;
const express = require('express');
const cors = require('cors')({origin: true});


const app = express();
app.use(cors);
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

app.get('/', async (req: any, res: any) => {
  var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
  //response.send("Hello from Firebase! Your Ip is..." + ip);

  try {
      console.log("The ip address is: " + ip)
      const data = await axios.get(`http://api.ipstack.com/${ip}?access_key=f2939f425cf0fa6b5e4a9b4ef393d2b1&format=1`);
      console.log(data.data);
      //let obj = JSON.stringify(data);
      //console.log(obj);
      res.json(data.data);
    } catch (error) {
      console.error(error);
    }
})

exports.app = functions.https.onRequest(app);
