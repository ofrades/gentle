# Coding Challenge

## TODO
- [x] Interact with twitter api
- [x] Get main design done
- [x] Search twitter user
- [x] Displays tweets
- [x] Add refetching every 1 minute
- [] Tests
 
- I decided to use Next.js because it is a very nice react framework, with a variety of templates to get things started fast. Also can be
    used to render the first content in the server.

- For styling I choose styled-components, just because I like it, it is simple and I like to have my components clean. In a different situation, with more components and bigger complexity the library I probably choose is the material ui, especially now, with 5.0 and the styled api implemented natively.

- React-query to help me cache, fetch and mutate. Also, to control the refecth time.

### Problems I faced

- The twitter api do not let you access it with ease, so I created my own api with Next.js at api/tweets and used Twit library for Node.js to
    interact with Twitter's api.

### Deploy
- Used vercel, simply very simple
- Link to gentle website [gentle](https://gentle.vercel.app/)

### To run
 - Clone the repository
 - Install the dependencies with `yarn`
 - Get the tokens and keys from [twitter](https://developer.twitter.com/en/portal/projects-and-apps) or ask me for the `.env`
 - Run `yarn dev`

