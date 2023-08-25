import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { interviews } from "@/public/interviews";
import Markdown from "markdown-to-jsx";
import styled from "styled-components";

export default function InterviewArticle() {
  const router = useRouter();
  const interviewId = router.query.interviewId;
  const [likes, setLikes] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);
  const [messageLength, setMessageLength] = useState(0);
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    const savedLikes = localStorage.getItem(`likes${interviewId}`);
    if (savedLikes !== null) {
      setLikes(parseInt(savedLikes));
    }
    const savedComments = localStorage.getItem(`comments${interviewId}`);
    if (savedComments !== null) {
      setComments(JSON.parse(savedComments));
    }
  }, [interviewId]);

  useEffect(() => {
    localStorage.setItem(`comments${interviewId}`, JSON.stringify(comments));
  }, [comments, interviewId]);

  const article = interviews.find((interview) => interview.id === interviewId);

  if (!article) {
    return null;
  }

  const handleLikeClick = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(`likes${interviewId}`, newLikes.toString());
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setMessageLength(event.target.value.length);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (name === "" || message === "") {
      alert("Please enter a name and message");
      return;
    }

    const newComment = {
      name,
      message,
    };

    if (editIndex === -1) {
      setComments([...comments, newComment]);
    } else {
      const updatedComments = [...comments];
      updatedComments[editIndex] = newComment;
      setComments(updatedComments);
      setEditIndex(-1);
    }

    setName("");
    setMessage("");
  };

  const handleDeleteComment = (index) => {
    const confirmed = confirm("Are you sure you want to delete your comment?");

    if (confirmed) {
      const updatedComments = [...comments];
      updatedComments.splice(index, 1);
      setComments(updatedComments);

      if (editIndex === index) {
        setEditIndex(-1);
      }
    }
  };

  const handleEditComment = (index) => {
    const commentToEdit = comments[index];
    setName(commentToEdit.name);
    setMessage(commentToEdit.message);
    setEditIndex(index);
  };

  return (
    <Article>
      <Title>{article.title}</Title>
      <LikeContainer>
        <ThumbUpIcon onClick={handleLikeClick} />
        <LikeCount>{likes}</LikeCount>
      </LikeContainer>
      <Separator />
      <Image src={article.image} alt={article.title} />
      <Text>
        <Markdown>{article.text}</Markdown>
      </Text>
      <Comments>
        <Form onSubmit={handleFormSubmit}>
          <InputContainer>
            <Label htmlFor="name">Name:</Label>
            <TextInput
              id="name"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="message">Message:</Label>
            <TextArea
              id="message"
              value={message}
              onChange={handleMessageChange}
              maxLength="150"
            />
            <CharCount>{messageLength}/150</CharCount>
          </InputContainer>
          <ButtonContainer>
            <SubmitButton type="submit">
              {editIndex === -1 ? "Submit" : "Update"}
            </SubmitButton>
            {editIndex !== -1 && (
              <CancelButton onClick={() => setEditIndex(-1)}>
                Cancel
              </CancelButton>
            )}
          </ButtonContainer>
        </Form>
        {comments.map((comment, index) => (
          <Comment key={index}>
            <CommentName>User {comment.name} wrote:</CommentName>
            {editIndex === index ? (
              <Form onSubmit={handleFormSubmit}>
                <InputContainer>
                  <Label htmlFor="edit-name">Name:</Label>
                  <TextInput
                    id="edit-name"
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                  />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="edit-message">Message:</Label>
                  <TextArea
                    id="edit-message"
                    value={message}
                    onChange={handleMessageChange}
                    maxLength="150"
                  />
                  <CharCount>{messageLength}/150</CharCount>
                </InputContainer>
                <ButtonContainer>
                  <SubmitButton type="submit">Update</SubmitButton>
                  <CancelButton onClick={() => setEditIndex(-1)}>
                    Cancel
                  </CancelButton>
                </ButtonContainer>
              </Form>
            ) : (
              <>
                <CommentMessage>{comment.message}</CommentMessage>
                <ButtonContainer>
                  <EditButton onClick={() => handleEditComment(index)}>
                    Edit
                  </EditButton>
                  <DeleteButton onClick={() => handleDeleteComment(index)}>
                    Delete
                  </DeleteButton>
                </ButtonContainer>
              </>
            )}
          </Comment>
        ))}
      </Comments>
    </Article>
  );
}

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #95091b;
  line-height: 1.4;
  margin-top: 0;
`;

const LikeContainer = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  text-decoration: none;
  background-color: #fafafa;
`;

const ThumbUpIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url("/thumbs-up-regular.svg");
  background-size: cover;
  margin-inline: 15px;
  text-decoration: none;
`;

const LikeCount = styled.span``;

const Separator = styled.hr`
  border-bottom: 1px solid #dfdfdf;
  margin-bottom: 25px;
  width: 280px;
  box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.25);
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25));
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Text = styled.div`
  padding: 10px;
  word-break: normal;
  margin-inline: 10px;
  text-align: justify;
`;

const Comments = styled.div`
  margin-top: 20px;
  margin-bottom: 100px;
  padding-bottom: 120px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
`;

const TextInput = styled.input`
  width: 100%;
  padding: 5px;
  font-size: 16px;
  border-radius: 0.25em;
  border: 1px solid #dfdfdf;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 5px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #dfdfdf;
  border-radius: 0.25em;
  resize: vertical;
  height: 100px;
`;

const CharCount = styled.div`
  font-size: 12px;
  margin-top: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: solid 2px #95091b;
  border-radius: 0.25em;
  background-color: #fafafa;
  color: #95091b;
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #95091b;
    color: #fafafa;
  }
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: solid 2px #dfdfdf;
  border-radius: 0.25em;
  background-color: #fafafa;
  margin-right: 10px;
  cursor: pointer;
`;

const Comment = styled.div`
  margin-bottom: 20px;
  border: 2px solid #95091b;
  border-radius: 0.25em;
  padding: 25px;
  position: relative;
`;

const CommentName = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const CommentMessage = styled.div`
  white-space: pre-wrap;
`;

const EditButton = styled.button`
  padding: 10px;
  font-size: 16px;
  font-weight: 700;
  background-color: #fafafa;
  border: solid 1px #95091b;
  color: #95091b;
  cursor: pointer;
  margin-right: 10px;
`;

const DeleteButton = styled.button`
  padding: 10px;
  font-size: 16px;
  font-weight: 700;
  background-color: #fafafa;
  border: solid 1px #95091b;
  color: #95091b;
  cursor: pointer;
`;
