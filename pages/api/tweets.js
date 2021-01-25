import Twit from 'twit';

var Twitter = new Twit({
  consumer_key: `${process.env.NEXT_PUBLIC_API_KEY}`,
  consumer_secret: `${process.env.NEXT_PUBLIC_API_SECRET_KEY}`,
  access_token: `${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
  access_token_secret: `${process.env.NEXT_PUBLIC_TOKEN_SECRET}`,
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true, // optional - requires SSL certificates to be valid.
});

export default async function handler(req, res) {
  try {
    Twitter.get(
      'statuses/user_timeline',
      { screen_name: req.query.user, count: req.query.count },
      function (err, data, response) {
        res.json(data);
      }
    );
  } catch (error) {
    console.log('error', error);
  }
}
