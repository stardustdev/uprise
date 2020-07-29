import React from 'react';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  Reply,
  ChatBubble,
  ThumbUp,
} from '@material-ui/icons';
import { colors } from '@material-ui/core';

export const Facebook = () => {
  return <FacebookIcon style={{ color: colors.blue[700] }} fontSize="small" />;
};

export const Twitter = () => {
  return <TwitterIcon style={{ color: colors.blue[500] }} fontSize="small" />;
};

export const LinkedIn = () => {
  return <LinkedInIcon style={{ color: colors.blue[900] }} fontSize="small" />;
};

export const Instagram = () => {
  return <InstagramIcon style={{ color: colors.pink[400] }} fontSize="small" />;
};

export const Share = () => {
  return <Reply fontSize="small" />;
};

export const Like = () => {
  return <ThumbUp fontSize="small" />;
};

export const Comment = () => {
  return <ChatBubble fontSize="small" />;
};
