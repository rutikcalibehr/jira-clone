import { v4 as uuidv4 } from "uuid";
import { User } from "../user";

export type CommentId = string;

export interface CommentData {
  id: CommentId,
  user: User;
  message: string;
  //TODO: createdAt: timestamp
}

export interface Comment extends CommentData {
  setMessage: (message: string) => void;
}

export const createComment = (data: Omit<CommentData, "id">): Comment => ({
  id: uuidv4(),
  ...data,

  setMessage: function(message: string) {
    this.message = message;
  },
});