import { useState, useEffect } from 'react';
import Image from 'next/image';
import Tweets from './Tweets.jsx';
import SearchUser from './SearchUser.jsx';
import Link from 'next/link';
import { useQuery } from 'react-query';
import {
  Container,
  Title,
  Card,
  Content,
  User,
  Count,
  SkeletonWrapper,
  Skeleton,
} from './styles';
import { getTweets } from '../../services/tweets';
import { RiAddLine, RiSubtractLine, RiUserLine } from 'react-icons/ri';

const Layout = ({ tweets }) => {
  const [user, setUser] = useState(tweets?.user?.name);
  const [query, setQuery] = useState(user);
  const [numTweets, setNumTweets] = useState(5);

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const { data, isLoading, isFetching, refetch } = useQuery(
    ['user', query],
    () => getTweets(user, numTweets),
    { initialData: tweets, refetchInterval: 60000 }
  );

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setQuery(user);
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [user]);
  useEffect(() => {
    setNumTweets(numTweets);
    refetch();
  }, [numTweets]);

  return (
    <Container>
      <Title>Gentle Tweet</Title>
      <Card>
        <SearchUser
          isLoading={isLoading}
          isFetching={isFetching}
          user={user}
          handleChange={handleChange}
        />
        <Content>
          {(query === '' || data?.errors || data?.length === 0) && (
            <User>No user with that screen name</User>
          )}
          {data?.length > 0 && (
            <User>
              <span>
                <RiUserLine />
                <Link href={data?.find((e) => true).user.url || ''}>
                  {data?.find((e) => true).user.name}
                </Link>
              </span>
              <Image
                src={data?.find((e) => true).user.profile_image_url}
                alt="User Picture"
                width={50}
                height={50}
              />
            </User>
          )}
          {data?.length > 0 &&
            data?.map((item) => <Tweets key={item.id} data={item} />)}
          {isLoading && (
            <>
              <SkeletonWrapper>
                <Skeleton />
              </SkeletonWrapper>
              <SkeletonWrapper>
                <Skeleton />
                <Skeleton />
              </SkeletonWrapper>
            </>
          )}
          {data?.length > 0 && (
            <Count>
              <RiSubtractLine onClick={() => setNumTweets(numTweets - 1)} />
              <RiAddLine onClick={() => setNumTweets(numTweets + 1)} />
            </Count>
          )}
        </Content>
      </Card>
    </Container>
  );
};

export default Layout;
