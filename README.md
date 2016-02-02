# Forbes Quote of the day [![Build Status](https://travis-ci.org/yujinlim/forbes-quote.svg?branch=master&style=flat-square)](https://travis-ci.org/yujinlim/forbes-quote)
> get Forbes news quote of the day

## Install
```sh
npm i --save forbes-quote
```

## Usage
```javascript
const getQuote = require('forbes-quote');

getQuote()
  .then((quote) => {
    console.log(quote);
    /**
     * {
     * 	"quote": "Teach self-denial and make its practice pleasure, and you can create for the world a destiny more sublime that ever issued from the brain of the wildest dreamer.",
     * 	"author": "Sir Walter Scott",
     * 	"url": "http://onforb.es/TK4kVr"
     * }
     */
  })
```

## License
MIT © [Yu-Jin](https://github.com/yujinlim/forbes-quote/blob/master/LICENSE)
