import { useState } from "react";
import styled from "styled-components";
import ArticleList from "./ArticleList";
import ArticleDetail from "./ArticleDetail";

function App() {
  const [selectedId, setSelectedId] = useState(null);
  function handleSelect(id) {
    setSelectedId(id);
  }

  return (
    <StyledApp>
      <ArticleList onSelect={handleSelect} />
      {selectedId !== null ? <ArticleDetail selectedId={selectedId} /> : "None"}
    </StyledApp>
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
