import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
const queryClient = new QueryClient();
import Tweets from '../components/Tweets/index';
import { getTweets } from '../services/tweets';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { theme } from './../styles/globalStyles.js';

export default function Home({ tweets }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Tweets tweets={tweets} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
export async function getServerProps() {
  const tweets = await getTweets();
  return { props: { tweets } };
}
