import styled from "styled-components";

export const DisplayContainer = (props) => {
  const { srcDoc } = props;

  return (
    <DisplayWrapper>
      <FrameHere title="display-area" srcDoc={srcDoc} />
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
    height: 100%;
  background-color: azure;
  margin: 10px;
  border: 5px solid black;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;


const FrameHere = styled.iframe`
    width: 100%;
    height: 100%;
`