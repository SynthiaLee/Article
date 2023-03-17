import styled from "styled-components";
import { CloseIcon } from "./CloseIcon";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { axiosInstance } from "./api";

function WriteModal({ open, onOpenChange }) {
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

        axiosInstance.get(`/article`).then((res) => {
          console.log("요청왔다!", res.data);
          setArticleList(res.data);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    alert("New article has been added!");
    setTitle("");
    setContent("");
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleContentChange(e) {
    setContent(e.target.value);
  }
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DivTitleBox>
            <DialogTitle>아티클 작성하기</DialogTitle>
            <DialogClose>
              <CloseIcon />
            </DialogClose>
          </DivTitleBox>
          <DivMainBox>
            <H4>제목</H4>
            <Input
              type="text"
              placeholder="아티클 제목을 작성해주세요"
              value={title}
              onChange={handleTitleChange}
            ></Input>
            <H4>내용</H4>
            <InputContent
              type="text"
              placeholder="아티클 내용을 작성해주세요"
              value={content}
              onChange={handleContentChange}
            ></InputContent>
            <PostButton onClick={() => handleCreate()}>작성 완료</PostButton>
          </DivMainBox>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default WriteModal;

const DialogOverlay = styled(Dialog.Overlay)`
  background-color: gray;
  position: fixed;
  inset: 0;
`;
const Div = styled.div`
  display: flex;
`;
const DivTitleBox = styled(Div)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const DivMainBox = styled(Div)`
  flex-direction: column;
`;
const DialogContent = styled(Dialog.Content)`
  box-sizing: border-box;
  background-color: white;
  border-radius: 28px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 1000px;
  max-height: 90%;
  padding-top: 48px;
  padding-bottom: 48px;
  padding-right: 50px;
  padding-left: 50px;
`;
const DialogTitle = styled(Dialog.Title)`
  font-size: 28px;
`;
const DialogClose = styled(Dialog.Close)`
  box-sizing: content-box;
  background-color: #ffffff;
  width: 48px;
  height: 48px;
  border: solid;
  border-radius: 8px;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;
const H4 = styled.h4`
  font-size: 20px;
  height: 27px;
`;
const Input = styled.input`
  box-sizing: content-box;
  width: 900px;
  height: 48px;
  border: solid #acb5bd 1px;
  border-radius: 8px;
`;
const InputContent = styled(Input)`
  height: 219px;
`;
const PostButton = styled.button`
  box-sizing: content-box;
  background-color: #0f6fff;
  color: white;
  font-size: 18px;
  border: solid 1px;
  border-radius: 8px;
  width: 900px;
  height: 52px;
  margin-top: 63px;
  &:hover {
    cursor: pointer;
    background-color: #458af3;
  }
`;
