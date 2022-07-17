import styled from "styled-components";
import "./App.css";
import { useEffect, useState } from "react";

import { DisplayContainer } from "./components/DisplayContainer";
import { Editor } from "./components/Editor";

// icons here from react icons kit


function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");


  
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(`
        <html>
            <body>${html}</body>
            <style>${css}</style> 
            <script type="text/javascript">${js}</script>   
        </html>
    `);
    }
    , 250);

    return () => {
      clearTimeout(timeOut);
    }
  }, [html, css, js]);



  let htmlPlaceHolder = `
    <html>
      <body>
        please enter the html code that goes here...
      </body>
    </html>
  `;

  let cssPlaceHolder = `
    /* please enter the css code that goes here... */
  `;

  let jsPlaceHolder = `
    /* please enter the js code that goes here... */
  `;

  return (
    <div>
      <AppContainer>
      <Title>Code Editor</Title>
        <EditorWrapper>
          <Editor
            displayName="HTML"
            onChange={setHtml}
            placeholder={htmlPlaceHolder}
          />
          <Editor displayName="CSS" onChange={setCss} 
          placeholder={cssPlaceHolder} />
          <Editor displayName="JS" onChange={setJs} 
          placeholder={jsPlaceHolder} />
        </EditorWrapper>
        <DisplayContainer html={html} css={css} js={js} srcDoc={srcDoc}/>
      </AppContainer>
    </div>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;
  flex-basis: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
`;

const EditorWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: lightgray;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const Title = styled.h1`
  color: white;
`;

export default App;
