import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.blue};
`;

export const Title = styled.h1`
  font-family: 'Abril Fatface', cursive;
  display: flex;
  color: ${(props) => props.theme.colors.white};
  font-size: 3rem;
  padding: 1rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: ${(props) => props.theme.colors.blue};
  border: 5px dashed ${(props) => props.theme.colors.blue};
  width: 400px;
`;

export const Content = styled.div``;

export const Tweet = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  padding: 1rem;
  border: 1px dashed ${(props) => props.theme.colors.blue};
  :hover {
    background-color: ${(props) => props.theme.colors.yellow};
  }
`;
export const Text = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.green};
  border: 1px solid ${(props) => props.theme.colors.yellow};
`;

export const Love = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors.green};
  font-size: 1.2rem;
  justify-content: flex-end;
  svg {
    color: ${(props) => props.theme.colors.red};
    margin-right: 0.5rem;
  }
`;

export const User = styled.div`
  background-color: ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  > a {
    align-items: start;
    text-decoration: none;
    font-size: 1.2rem;
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
  border-bottom: 5px dashed ${(props) => props.theme.colors.blue};
  background-color: ${(props) => props.theme.colors.white};
  padding: 1rem;
  :hover {
    background-color: ${(props) => props.theme.colors.yellow};
  }
  > input {
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
    ::placeholder {
      color: ${(props) => props.theme.colors.green};
    }
    margin: 1rem;
    :focus {
      border: none;
      outline: none;
    }
  }
  svg {
    width: 2rem;
    height: 2rem;
    color: ${(props) => props.theme.colors.green};
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
  background-color: ${(props) => props.theme.colors.darkBlue};
  color: ${(props) => props.theme.colors.green};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 2rem;
  > svg {
    width: 50%;
    padding: 0.5rem;
    :hover {
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.green};
    }
  }
`;
