import styled from "styled-components";

function ArticleList({ onSelect, articleList }) {
  function handleView(id) {
    onSelect(id);
  }

  return (
    <StyledList>
      {articleList.map((v) => (
        <ArticleButton>
          <Button onClick={() => handleView(v.id)}> {v.title} </Button>
          <Icon></Icon>
        </ArticleButton>
      ))}
    </StyledList>
  );
}

export default ArticleList;

const StyledList = styled.div``;

const ArticleButton = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  display: flex;
  justify-content: space-between;
  background-color: white;
  width: 1260px;
  height: 89px;
  color: black;
  font-size: 24px;
  padding: 30px 0px;
  border: solid white 1px;
  border-bottom: solid #e3e8eb 1px;
  &:hover {
    background-color: #e3e8eb6f;
    cursor: pointer;
  }
`;
const Icon = styled.div``;
