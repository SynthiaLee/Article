import { useState } from "react";
import styled from "styled-components";
import ArticleList from "./ArticleList";
import ArticleDetail from "./ArticleDetail";
import ArticleCreate from "./ArticleCreate";

function App() {
  const [selectedId, setSelectedId] = useState(null);
  function handleSelect(id) {
    setSelectedId(id);
  }

  return (
    <Div>
      <StyledApp>
        <ArticleList onSelect={handleSelect} />
        {selectedId !== null ? (
          <ArticleDetail selectedId={selectedId} />
        ) : (
          "None"
        )}
      </StyledApp>
      <ArticleCreate />
    </Div>
  );
}

export default App;

const StyledApp = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-around;
  margin-top: 60px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
