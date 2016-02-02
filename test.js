'use strict';

import test from 'ava';
import proxyquire from 'proxyquire';

const quire = proxyquire.noPreserveCache();

test.cb('handling missing thought', t => {
  const app = quire('./index', {
    got: function() {
      return Promise.resolve({
        body: null
      });
    }
  });

  app()
    .then(() => {
      t.fail();
      t.end();
    })
    .catch((err) => {
      t.is(err.message, 'Thought bubble is unavailable');
      t.end();
    });
});

test.cb('api test', t => {
  const app = require('./index');

  app()
    .then((quote) => {
      t.ok(quote.quote, 'quote is unavailable');
      t.ok(quote.author, 'author is unavailable');
      t.ok(quote.url, 'url is unavailable');
      t.end();
    })
    .catch((err) => {
      t.fail();
      t.end();
    });
});
