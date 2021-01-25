import Twit from 'twit';

export default new Twit({
  consumer_key: `${process.env.NEXT_PUBLIC_API_KEY}`,
  consumer_secret: `${process.env.NEXT_PUBLIC_API_SECRET_KEY}`,
  access_token: `${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
  access_token_secret: `${process.env.NEXT_PUBLIC_TOKEN_SECRET}`,
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true, // optional - requires SSL certificates to be valid.
});
