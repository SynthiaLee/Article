import { useState, useEffect } from "react";
import styled from "styled-components";
import ArticleList from "./ArticleList";
import ArticleDetail from "./ArticleDetail";
import ArticleCreate from "./ArticleCreate";
import { axiosInstance } from "./api";
import Modal from "react-modal";
import { CloseIcon } from "./CloseIcon";
import { AddIcon } from "./AddIcon";

Modal.setAppElement("#root");

function App() {
  const [articleList, setArticleList] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [articleModalIsOpen, setArticleModalIsOpen] = useState(false);

  function handleSelect(id) {
    setSelectedId(id);
  }
  useEffect(() => {
    axiosInstance.get(`/article`).then((res) => {
      console.log("요청왔다!", res.data);
      setArticleList(res.data);
    });
    console.log("요청했다!");
  }, []);

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

  function handleDelete() {
    axiosInstance.get(`/article`).then((res) => {
      setArticleList(res.data);
      setSelectedId(null);
    });
  }
  return (
    <MainBox>
      <TitleBox>
        <Title>시연님이 작성한 아티클이에요</Title>
        <AddButton onClick={() => setmodalIsOpen(true)}>
          <AddIcon />글 작성하기
        </AddButton>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setmodalIsOpen(false)}
          style={{
            overlay: {
              backgroundColor: "#F8F9FA",
            },
            content: {
              backgroundColor: "FFFFFF",
              top: "172px",
              left: "220px",
              right: "220px",
              bottom: "172px",
              border: "1px solid #ccc",
              background: "#fff",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "28px",
              outline: "none",
              paddingTop: "48px",
              paddingBottom: "48px",
              paddingLeft: "50px",
              paddingRight: "50px",
            },
          }}
        >
          <ModalTitleBox>
            <ModalTitle>아티클 작성하기</ModalTitle>
            <CloseButton onClick={() => setmodalIsOpen(false)}>
              <CloseIcon />
            </CloseButton>
          </ModalTitleBox>
          <Div>
            <H4>제목</H4>
            <Input type="text" placeholder="아티클 제목을 작성해주세요"></Input>
            <H4>내용</H4>
            <InputContent
              type="text"
              placeholder="아티클 내용을 작성해주세요"
            ></InputContent>
            <PostButton>작성 완료</PostButton>
          </Div>
        </Modal>
      </TitleBox>
      <ArticleBox>
        <ArticleList
          articleList={articleList}
          onSelect={handleSelect}
          onClick={() => setArticleModalIsOpen(true)}
        />
        <Modal
          isOpen={articleModalIsOpen}
          style={{
            overlay: {
              backgroundColor: "#F8F9FA",
            },
            content: {
              backgroundColor: "FFFFFF",
              top: "172px",
              left: "220px",
              right: "220px",
              bottom: "172px",
              border: "1px solid #ccc",
              background: "#fff",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "28px",
              outline: "none",
              paddingTop: "48px",
              paddingBottom: "48px",
              paddingLeft: "50px",
              paddingRight: "50px",
            },
          }}
        >
          <Div>
            <ArticleDetail selectedId={selectedId} />
          </Div>
        </Modal>
        <ArticleCreate onCreate={handleCreate} />
      </ArticleBox>
    </MainBox>
  );
}

export default App;
const MainBox = styled.div`
  margin: 94px 80px 71px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & * {
    box-sizing: border-box;
  }
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-right: 20px;
`;
const Title = styled.h2`
  font-size: 36px;
`;
const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #0f6fff;
  color: white;
  font-size: 18px;
  border: solid;
  border-radius: 6px;
  width: 143px;
  height: 48px;
  &:hover {
    cursor: pointer;
    background-color: #458af3;
  }
`;
const ModalTitleBox = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
`;
const ModalTitle = styled.h3`
  font-size: 25px;
  width: 175px;
  height: 34px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
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
  border: solid;
  border-radius: 8px;
  width: 900px;
  height: 52px;
  margin-top: 63px;
  &:hover {
    cursor: pointer;
    background-color: #458af3;
  }
`;
const CloseButton = styled.button`
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
const ArticleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 85px;
`;
const H3 = styled.h3``;
