import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';
import {
  Container,
  Title,
  Card,
  Search,
  Content,
  User,
  Tweet,
  Text,
  Love,
  LoadingIcon,
  Count,
} from './styles';
import { getTweets } from './../../services/tweet';
import {
  RiSearchEyeLine,
  RiLoaderLine,
  RiHeartFill,
  RiAddLine,
  RiSubtractLine,
} from 'react-icons/ri';

const Tweets = ({ tweets }) => {
  const queryClient = useQueryClient();
  const [user, setUser] = useState('subvisual');
  const [countTweets, setCountTweets] = useState(5);

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const { data, error, isLoading, status, isFetching, refetch } = useQuery(
    ['user', user],
    () => getTweets(user, countTweets),
    { initialData: tweets, refetchInterval: 60000 }
  );

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(user);
      refetch();
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [user, countTweets]);

  return (
    <Container>
      <Title>Gentle Tweet</Title>
      <Card>
        <Search>
          <input placeholder="Search Twitter User" onChange={handleChange} />
          {isLoading ? (
            <LoadingIcon>
              <RiLoaderLine />
            </LoadingIcon>
          ) : (
            <RiSearchEyeLine />
          )}
        </Search>
        <Content>
          {error ||
            (status === 'success' && data.error && (
              <Tweet>
                <Text>No user with that screen name</Text>
              </Tweet>
            ))}
          {data?.length > 0 && (
            <User>
              <Link href={data[0]?.user.url || ''}>{data[0]?.user.name}</Link>
              <Image
                src={data[0]?.user.profile_image_url}
                alt="User Picture"
                width={30}
                height={30}
              />
            </User>
          )}
          {data?.length > 0 &&
            data?.map(({ text, favorite_count, id }) => (
              <Tweet key={id}>
                <Text>{text}</Text>
                <Love>
                  <RiHeartFill /> {favorite_count}
                </Love>
              </Tweet>
            ))}
          <Count>
            <RiSubtractLine onClick={() => setCountTweets(countTweets - 1)} />
            <RiAddLine onClick={() => setCountTweets(countTweets + 1)} />
          </Count>
        </Content>
      </Card>
    </Container>
  );
};

export default Tweets;
