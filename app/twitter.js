let Twitter = require('twit');

const consumer_key = 'PZuIOJhdGxYM4FEdFuuvgKkHe';
const consumer_secret = 'X1eQSrHjTDWL4hhN6tAF4fHZmGFB6aFL8FxFr62fgstOhwA4sZ';
const access_token = '85584838-cMiKxCGbwLBFQWEZSpYKtugrw6jRDgt5dH0XAOTGw';
const access_token_secret = 'n9WUh2cltIFNoX34dsbvVwkqE75WvACEj1pyA73C7GnoN';
const search_string = 'WeekendKaVaar';

if (!consumer_key) { missing("TWITTER_CONSUMER_KEY"); }
if (!consumer_secret) { missing("TWITTER_CONSUMER_SECRET"); }
if (!access_token) { missing("TWITTER_ACCESS_TOKEN"); }
if (!access_token_secret) { missing("TWITTER_ACCESS_SECRET"); }
if (!search_string) { missing("TWITTER_SEARCH_STRING"); }

const track = search_string.split(',');

let twitter = new Twitter({

    consumer_key,
    consumer_secret,
    access_token,
    access_token_secret
    
});

module.exports = { twitter, track };
