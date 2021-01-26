import axios from 'axios';
import { getTweets } from './tweets';

jest.mock('axios');

describe('fetchData', () => {
  it('fetches successfully data from an API', async () => {
    const data = {
      data: [
        {
          favorite_count: '1',
          lang: 'en',
        },
        {
          favorite_count: '2',
          lang: 'pt',
        },
      ],
    };

    const request = axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data })
    );

    await expect(getTweets('react', 5)).resolves.toEqual(data);

    expect(request).toHaveBeenCalledWith('api/tweets?user=react&count=5');
    expect(request).toHaveBeenCalledTimes(1);
  });
});
