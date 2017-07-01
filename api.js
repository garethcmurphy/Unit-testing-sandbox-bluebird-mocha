var ask = require('./ask');

ask('are you happy?')
  .then(function (reply) {
    console.log('user replied', reply);
  })
  .finally(process.exit);
