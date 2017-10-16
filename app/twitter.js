let Twitter = require('twit');

const consumer_key = '';
const consumer_secret = '';
const access_token = '';
const access_token_secret = '';
const search_string = '';

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
