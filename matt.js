var Nightmare = require('nightmare');
var nightmare = Nightmare({show: true});

nightmare
  .goto('http://secretflying.com/usa-deals/')
  .evaluate(function () {
    return document.querySelector('a[rel="bookmark"]').href
  })
  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('Scrape failed: ', error);
  });
