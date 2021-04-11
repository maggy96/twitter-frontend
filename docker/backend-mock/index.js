const express = require('express')
const faker = require('faker');
const cors = require('cors');
const app = express();
const port = 9001;
app.use(cors());

app.get('/tweets', (req, res) => {
  const tweets = Array.from(Array(10)).map(x => (
    {
      displayName: faker.name.firstName(),
      userName: faker.internet.userName(),
      verified: faker.datatype.boolean(),
      text: faker.lorem.paragraph(),
      likes: faker.datatype.number(),
      retweets: faker.datatype.number(),
      avatar: faker.image.avatar(),
      date: faker.date.recent(),
    }));
  res.send(tweets);
})

app.post('/tweet', (req, res) => {
  res.json({status: 'ok'});
})

app.listen(port, () => {
  console.log(`backend mock listening at http://localhost:${port}`)
})
