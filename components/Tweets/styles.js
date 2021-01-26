import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100%;
  width: 100%;
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.grey};
`;

export const Title = styled.h1`
  font-family: ${(p) => p.theme.fonts.serif};
  display: flex;
  color: ${(props) => props.theme.colors.primary};
  font-size: 3rem;
  padding: 1rem;
`;

export const Card = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 1rem;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  max-width: 400px;
  width: 100%;
  height: 50%;
  box-shadow: 0 1rem 1rem 0 rgba(0, 0, 0, 0.1), 0 1rem 1rem 0 rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
  width: 100%;
`;

export const Tweet = styled.div`
  border-bottom: 3px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.white};
  padding: 1rem;
  :hover {
    background-color: ${(props) => props.theme.colors.grey};
  }
`;
export const Text = styled.div`
  display: block;
  box-shadow: 0 0.1rem 0.1rem 0 rgba(0, 0, 0, 0.1),
    0 0.1rem 0.5rem 0 rgba(0, 0, 0, 0.1);
  align-items: center;
  padding: 1rem;
  margin-bottom: 0.5rem;
  font-family: ${(p) => p.theme.fonts.sans};
  font-style: italic;
  color: ${(props) => props.theme.colors.dark};
  > svg {
    color: ${(props) => props.theme.colors.primary};
    font-size: 2rem;
  }
`;

export const Love = styled.div`
  svg {
    color: ${(props) => props.theme.colors.primary};
    padding-left: 0.75rem;
  }
`;

export const User = styled.div`
  font-family: ${(p) => p.theme.fonts.serif};
  font-weight: 600;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  align-items: center;
  > span svg {
    font-size: 1.3rem;
    margin-right: 1rem;
  }
  > span a {
    font-size: 2rem;
    text-decoration: none;
    color: ${(props) => props.theme.colors.grey};
    :hover {
      color: ${(props) => props.theme.colors.white};
    }
  }
  > div {
    border-radius: 100%;
  }
`;

export const Search = styled.div`
  width: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  border-bottom: 5px solid ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.white};
  :hover {
    background-color: ${(props) => props.theme.colors.grey};
  }
  > input {
    padding: 1rem;
    border: none;
    background-color: transparent;
    font-size: 1.4rem;
    ::placeholder {
      color: ${(props) => props.theme.colors.secondary};
    }
    :focus {
      border: none;
      outline: none;
    }
  }
  svg {
    width: 2rem;
    height: 2rem;
    padding: 1rem;
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingIcon = styled.div`
  ${css`
    > svg {
      animation: ${rotate} 2s linear infinite;
    }
  `}
`;

export const Count = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  > svg {
    width: 50%;
    height: 2.5rem;
    cursor: pointer;
    :hover {
      color: ${(props) => props.theme.colors.secondary};
      background-color: ${(props) => props.theme.colors.white};
    }
  }
`;

export const SkeletonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: ;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0 1rem 1rem 0 rgba(0, 0, 0, 0.1), 0 1rem 1rem 0 rgba(0, 0, 0, 0.1);
`;

export const Skeleton = styled.div`
  width: 95%;
  height: 3rem;
  margin: 1rem;
  box-shadow: 0 1rem 1rem 0 rgba(0, 0, 0, 0.1), 0 1rem 1rem 0 rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colors.grey};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-family: ${(p) => p.theme.fonts.sans};
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.dark};
  border-bottom: 3px solid ${(props) => props.theme.colors.secondary};
  > span {
    cursor: pointer;
    :hover {
      color: ${(props) => props.theme.colors.primary};
    }
    > svg {
      padding-left: 0.5rem;
      font-size: 0.7rem;
    }
  }
`;
