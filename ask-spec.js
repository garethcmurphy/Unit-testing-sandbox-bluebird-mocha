
var ask = require('./ask');
var bddStdin = require('bdd-stdin');

describe('ask', function () {
  var stdin;
  beforeEach(function () {
    stdin = require('mock-stdin').stdin();
  });
  it('asks a question', function () {
    process.nextTick(function mockResponse() {
      stdin.send('response');
    });
    return ask('question: test')
      .then(function (response) {
        console.assert(response === 'response');
      });
  });
it('asks three questions separately', function () {
  bddStdin('one');
  return ask('question 1')
    .then(function (response) {
      console.assert(response === 'one');
      bddStdin('two');
      return ask('question 2');
    })
    .then(function (response) {
      console.assert(response === 'two');
      bddStdin('three');
      return ask('question 3');
    }).then(function (response) {
      console.assert(response === 'three');
    });
});
});
