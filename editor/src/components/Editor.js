import styled from "styled-components";
import { useEffect, useState } from "react";

export const Editor = (props) => {
  // props
  const { displayName, onChange, placeholder } = props;

  // state
  const [open, setOpen] = useState(true);

    const hancleClick = (e) => {
        e.preventDefault();
        setOpen(!open);
    }

  const handleChange = (e) => {
    e.preventDefault();
    onChange(e.target.value);
  };
  useEffect(() => {
    return () => {
      document.removeEventListener("keydown", handleChange);
    };
  }, [handleChange]);

  return (
    <Wrapper
      style={{
        flexGrow: open ? "1" : "0",
      }}
    >
      <TitleArea>
        <Title>{displayName}</Title>
        <button onClick={(e) => hancleClick(e)}>icon</button>
      </TitleArea>
      <InputTextArea
        onChange={(e) => {
          handleChange(e);
        }}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0;
  margin: 10px;
  border-radius: 10px;
  box-sizing: border-box;
`;

const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  align-items: center;
  padding: 5px;
`;

const Title = styled.h3``;

const InputTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;
