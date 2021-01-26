import Link from 'next/link';
import { Tweet, Text, Love, Footer } from './styles';
import { RiHeartFill, RiLinksLine, RiTwitterFill } from 'react-icons/ri';

const Tweets = ({ data }) => {
  return (
    <Tweet>
      <Text>
        <RiTwitterFill /> {data.text}
      </Text>
      <Footer>
        <Love>
          <RiHeartFill /> {data.favorite_count}
        </Love>
        {data.entities.urls.find((e) => e.url) && (
          <Link href={data.entities.urls.map((e) => e.url)}>
            <span>
              Open link <RiLinksLine />{' '}
            </span>
          </Link>
        )}
        <span>{data.created_at.split('+')[0]}</span>
      </Footer>
    </Tweet>
  );
};
export default Tweets;
