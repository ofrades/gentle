import axios from 'axios';

export const getTweets = async (user = 'nextofficial', count = 5) => {
  try {
    const response = await axios.get(`api/tweets?user=${user}&count=${count}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
