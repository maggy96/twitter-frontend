const express = require('express')
const faker = require('faker');
const app = express()
const port = 9001

app.get('/tweets', (req, res) => {
  const tweets = Array.from(Array(1000)).map(x => (
    {
      displayName: faker.name.firstName(),
      userName: faker.internet.userName(),
      verified: faker.datatype.boolean(),
      text: faker.lorem.paragraph(),
      likes: faker.datatype.number(),
      retweets: faker.datatype.number(),
    }));
  res.send(tweets);
})

app.listen(port, () => {
  console.log(`backend mock listening at http://localhost:${port}`)
})
