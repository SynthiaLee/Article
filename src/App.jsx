import { useEffect, useState } from "react";
import styled from "styled-components";
import { axiosInstance } from "./api";
import ArticleList from "./ArticleList";

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

function ArticleDetail({ selectedId }) {
  const [content, setContent] = useState(null);
  useEffect(() => {
    console.log("hi");
    axiosInstance.get(`/article/${selectedId}`).then((res) => {
      setContent(res.data.content);
    });
  }, [selectedId]);

  return <Content>{content}</Content>;
}

const Content = styled.div`
  margin-top: 30px;
`;
