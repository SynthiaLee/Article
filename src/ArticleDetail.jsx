import { useEffect } from "react";
import styled from "styled-components";

function ArticleDetail({ selectedId }) {
  useEffect(() => {
    console.log("Changed!", selectedId);
  }, [selectedId]);

  return <Content>{content}</Content>;
}

export default ArticleDetail;

const Content = styled.div`
  margin-top: 30px;
`;
