import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "styled-components";
import { interviews } from "@/public/interviews";
import Markdown from "markdown-to-jsx";
import { useState, useEffect } from "react";
import ThumbUps from "@/public/thumbs-up-regular.svg";

export default function InterviewArticle() {
  const router = useRouter();
  const interviewId = router.query.interviewId;
  const [likes, setLikes] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);
  const [messageLength, setMessageLength] = useState(0);

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

  const article = interviews.find((interview) => interview.id == interviewId);
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
      name: name,
      message: message,
    };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    setName("");
    setMessage("");
    setMessageLength(0);
  };

  return (
    <StyledArticle>
      <TitleContainer>{article?.title}</TitleContainer>
      <ThumbUpContainer>
        <ThumbUpIcon onClick={handleLikeClick} />
        <span>{likes}</span>
      </ThumbUpContainer>
      <StyledSeparator />
      <ImageContainer>
        <Image src={article?.image} alt={article?.title} />
      </ImageContainer>
      <TextContainer>
        <Markdown>{article?.text}</Markdown>
      </TextContainer>
      <CommentsContainer>
        <form onSubmit={handleFormSubmit}>
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
              maxlength="150"
            />
            <CharCount>{messageLength}/150</CharCount>
          </InputContainer>
          <ButtonContainer>
            <SubmitButton type="submit">Submit</SubmitButton>
          </ButtonContainer>
        </form>
        {comments.map((comment, index) => (
          <Comment key={index}>
            <CommentName>User {comment.name} wrote:</CommentName>
            <CommentMessage>{comment.message}</CommentMessage>
          </Comment>
        ))}
      </CommentsContainer>
    </StyledArticle>
  );
}

const TextContainer = styled.div`
  padding: 10px;

  margin-top: 0;
  word-break: normal;
  margin-inline: 10px;
`;
const ImageContainer = styled.div`
  max-width: 100%;
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
const TitleContainer = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #95091b;
  line-height: 1.4;
  margin-top: 0;
`;
const ThumbUpContainer = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  text-decoration: none;
  background-color: #fafafa;
`;
const ThumbUpIcon = styled(ThumbUps)`
  width: 20px;
  height: 20px;
  fill: #95091b;
  margin-inline: 15px;
  text-decoration: none;
`;
const CommentsContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 200px;

  margin-bottom: 100px;
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
const ButtonContainer = styled.div`
  text-align: right;
  margin-bottom: 20px;
  margin-right: 10px;
`;
const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: solid 2px #95091b;
  border-radius: 0.25em;
  background-color: #fafafa;
  color: #95091b;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #95091b;
    color: #fafafa;
  }
`;
const Comment = styled.div`
  margin-bottom: 20px;
  border: 2px solid #95091b;
  border-radius: 0.25em;
`;
const CommentName = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;
const CommentMessage = styled.div`
  white-space: pre-wrap;
`;
const CharCount = styled.div`
  font-size: 12px;
  margin-top: 5px;
`;
const StyledSeparator = styled.hr`
  border-bottom: 1px solid #dfdfdf;
  margin-bottom: 25px;
  width: 280px;
  box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.25);
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25));
`;
const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
