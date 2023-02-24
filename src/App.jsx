import { useState, useEffect } from "react";
import styled from "styled-components";
import ArticleList from "./ArticleList";
import ArticleDetail from "./ArticleDetail";
import ArticleCreate from "./ArticleCreate";
import { axiosInstance } from "./api";

function App() {
  const [articleList, setArticleList] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  function handleSelect(id) {
    setSelectedId(id);
  }

  function handleCreate({ title, content }) {
    axiosInstance
      .post(`/article`, {
        title: title,
        content: content,
      })
      .then(function (response) {
        console.log(response);

        axiosInstance.get(`/article`).then((res) => {
          console.log("요청왔다!", res.data);
          setArticleList(res.data);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    axiosInstance.get(`/article`).then((res) => {
      console.log("요청왔다!", res.data);
      setArticleList(res.data);
    });
    console.log("요청했다!");
  }, []);

  return (
    <Div>
      <StyledApp>
        <ArticleList articleList={articleList} onSelect={handleSelect} />
        {selectedId !== null ? (
          <ArticleDetail selectedId={selectedId} />
        ) : (
          <H3>Select an article to see the content.</H3>
        )}
      </StyledApp>
      <ArticleCreate onCreate={handleCreate} />
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
const H3 = styled.h3``;
