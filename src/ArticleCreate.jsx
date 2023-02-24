import { useState } from "react";
import styled from "styled-components";
import { axiosInstance } from "./api";

function ArticleCreate() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleCreate() {
    axiosInstance
      .post(`/article`, {
        title: title,
        content: content,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    axiosInstance
      .get(`/article`)
      .then((res) => console.log("새 기사 추가됐다!"));
    setTitle("");
    setContent("");
    alert("New article has been added!");
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleContentChange(e) {
    setContent(e.target.value);
  }

  return (
    <Div>
      <Title>Create a new article</Title>
      <Input
        type="text"
        placeholder="Enter title here"
        value={title}
        onChange={handleTitleChange}
      ></Input>
      <Input
        type="text"
        placeholder="Enter content here"
        value={content}
        onChange={handleContentChange}
      ></Input>
      <Button
        onClick={() => {
          handleCreate();
        }}
      >
        Create new article
      </Button>
    </Div>
  );
}

export default ArticleCreate;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
const Title = styled.h2``;
const Button = styled.button`
  width: 150px;
  height: 30px;
  color: white;
  background-color: palevioletred;
  border: solid white 3px;
  border-radius: 10px;
  font-size: 15px;
  &:hover {
    cursor: pointer;
    background-color: #db90a9;
  }
`;
const Input = styled.input`
  width: 150px;
  height: 30px;
  color: black;
  border: solid black 1px;
  border-radius: 5px;
  margin-bottom: 10px;
`;
