import {
  Facebook,
  Twitter,
  LinkedIn,
  Reply,
  ChatBubble,
  ThumbUp,
} from '@material-ui/icons';
import { colors } from '@material-ui/core';

export const Facebook = () => {
  return <Facebook style={{ color: colors.blue[700] }} />;
};

export const Twitter = () => {
  return <Twitter style={{ color: colors.blue[500] }} />;
};

export const LinkedIn = () => {
  return <LinkedIn style={{ color: colors.blue[900] }} />;
};

export const Share = () => {
  return <Reply />;
};

export const Like = () => {
  return <ThumbUp />;
};

export const Comment = () => {
  return <ChatBubble />;
};
