'use strict';

const got = require('got');
const assert = require('assert');

const QUOTE_URL = 'http://www.forbes.com/forbesapi/thought/uri.json?enrich=true&query=1&relatedlimit=0';

module.exports = function() {
  return got(QUOTE_URL, {
      json: true
    })
    .then((r) => r.body)
    .then((body) => {
      assert(body && body.thought, 'Thought bubble is unavailable');
      const thought = body.thought;

      return {
        quote: thought.quote.trim(),
        author: thought.thoughtAuthor.name,
        url: thought.shortUri
      };
    });
};
