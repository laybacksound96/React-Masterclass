import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotation = keyframes`
  0%{
    background-color: aqua;
    transform: rotate(0deg);
    border-radius: 50px;
  }
  50%{
    background-color: tomato;
    transform: rotate(180deg);
    border-radius: 100px;
  }
  100%{
    background-color: aquamarine;
    transform: rotate(360deg);
    border-radius: 50px;
  }
`;

const Emoji = styled.span`
  font-size: 170px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotation} 0.5s linear infinite;
  ${Emoji}:hover {
    font-size: 40px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>🤔</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
