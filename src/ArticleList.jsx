import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

function ArticleList({ onSelect }) {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5005/api/v1/article").then((res) => {
      console.log("요청왔다!", res.data);
      setArticleList(res.data);
    });
    console.log("요청했다!");
  }, [articleList]);

  function handleView(id) {
    onSelect(id);
  }

  return (
    <StyledList>
      <Title>Article List</Title>
      {articleList.map((v) => (
        <StyledDiv>
          {v.title} <Button onClick={() => handleView(v.id)}>View</Button>
        </StyledDiv>
      ))}
    </StyledList>
  );
}

export default ArticleList;

const StyledList = styled.div``;
const Title = styled.h2`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;
const StyledDiv = styled.div`
  margin-bottom: 30px;
`;
const Button = styled.button`
  width: 50px;
  height: 30px;
  background-color: palevioletred;
  color: white;
  font-size: 15px;
  border: solid white 3px;
  border-radius: 10px;
  &:hover {
    background-color: #db90a9;
    cursor: pointer;
  }
`;
