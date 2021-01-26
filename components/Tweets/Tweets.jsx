import Link from 'next/link';
import { Tweet, Text, Love, Footer } from './styles';
import {
  RiHeartFill,
  RiLinksFill,
  RiTwitterFill,
  RiShareFill,
} from 'react-icons/ri';

const Tweets = ({ data }) => {
  return (
    <Tweet>
      <Text>
        <RiTwitterFill /> {data.text}
      </Text>
      <Footer>
        <Love>
          <RiHeartFill /> {data.favorite_count}
          <RiShareFill /> {data.retweet_count}
        </Love>
        {data.entities.urls.find((e) => e.url) && (
          <Link href={data.entities.urls.map((e) => e.url)}>
            <span>
              Open tweet <RiLinksFill />{' '}
            </span>
          </Link>
        )}
        <p>{data.created_at.split('+')[0]}</p>
      </Footer>
    </Tweet>
  );
};
export default Tweets;
