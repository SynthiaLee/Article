import { useState, useEffect } from "react";
import styled from "styled-components";
import { axiosInstance } from "./api";

function ArticleDetail({ selectedId, onDelete }) {
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
    if (window.confirm("Are you sure?")) {
      axiosInstance.delete(`/article/${selectedId}`).then(() => {
        alert("Article has been deleted.");
        onDelete();
      });
    }
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
