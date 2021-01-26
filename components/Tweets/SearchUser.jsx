import { Search, LoadingIcon } from './styles';
import { RiSearchEyeLine, RiLoaderLine } from 'react-icons/ri';

const SearchUser = ({ isLoading, isFetching, user, handleChange }) => {
  return (
    <Search>
      <input
        placeholder={user || 'Search Twitter User'}
        onChange={handleChange}
      />
      {isLoading || isFetching ? (
        <LoadingIcon>
          <RiLoaderLine />
        </LoadingIcon>
      ) : (
        <RiSearchEyeLine />
      )}
    </Search>
  );
};

export default SearchUser;
