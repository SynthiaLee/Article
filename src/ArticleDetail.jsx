import { useState, useEffect } from "react";
import styled from "styled-components";
import { axiosInstance } from "./api";

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

export default ArticleDetail;

const Content = styled.div`
  margin-top: 30px;
`;
