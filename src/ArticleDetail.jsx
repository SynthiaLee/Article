import { useState, useEffect } from "react";
import styled from "styled-components";
import { axiosInstance } from "./api";

function ArticleDetail({ selectedId }) {
  const [content, setContent] = useState(null);
  useEffect(() => {
    getArticle();
  }, [selectedId]);

  function getArticle() {
    axiosInstance.get(`/article/${selectedId}`).then((res) => {
      setContent(res.data.content);
    });
  }

  function handleDelete(selectedId) {
    axiosInstance.delete(`/article/${selectedId}`).then(() => {
      getArticle();
      alert("Article has been deleted.");
    });
  }

  return (
    <StyledDetail>
      <Content>{content}</Content>
      <Button onClick={() => handleDelete(selectedId)}> Delete</Button>
    </StyledDetail>
  );
}

export default ArticleDetail;

const Content = styled.div`
  margin-top: 30px;
`;
const Button = styled.button`
  width: 70px;
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
const StyledDetail = styled.div``;
