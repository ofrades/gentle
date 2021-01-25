import twitterClient from './../../client/twitter';

export default async function handler(req, res) {
  try {
    twitterClient.get(
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
