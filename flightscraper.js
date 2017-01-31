var Nightmare = require('nightmare');
var nightmare = Nightmare({show: true});

nightmare
  .goto('http://secretflying.com/usa-deals/')
  .evaluate(function () {
    return [].map.call(document.querySelectorAll('div > h2 > a'),
      function(link) {
            return link.getAttribute('href');
      })
  })
  .end()
  .then(function (result) {
      console.log(result.length)
      for (var i = 0; i < result.length; i++) {
          console.log(result[i])
          nightmare
            .goto(result[i])
            .evaluate(function() {

            })
            .end()
            .then(function (result) {
              console.log('visited')
            })
      }
  })
  .catch(function (error) {
    console.error('Scrape failed: ', error);
  });
