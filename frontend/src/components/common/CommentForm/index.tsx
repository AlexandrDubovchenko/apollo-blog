import { FC, FormEvent, useState } from "react";
import { ThreadsEnum } from "../../../generated/types";
import { Button } from "../Button";
import { Input, InputVariants } from "../Input";
import styles from "./styles.module.scss";
import { useCreateCommentMutation } from "./generated/Comment.mutation.generated";
import { useGetUserQuery } from "../../../auth/generated/Auth.query.generated";

type CommentFormProps = {
  attachToId: string;
  attachToType: ThreadsEnum;
};

export const CommentForm: FC<CommentFormProps> = ({
  attachToId,
  attachToType,
}) => {
  const { data: userData } = useGetUserQuery({
    variables: { accessToken: localStorage.getItem("token") || "" },
  });
  const [createComment] = useCreateCommentMutation();
  const [commentText, setCommentText] = useState("");
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createComment({
        variables: {
          comment: {
            author: userData?.getUser?._id,
            body: commentText,
          },
          attachToId,
          attachToType,
        },
      });
    } catch (error) {
      console.log(error);
    } finally {
      setCommentText("");
    }
  };
  if (!userData) return null;
  return (
    <form onSubmit={onSubmit} className={styles.root}>
      <Input
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        variant={InputVariants.textarea}
      />
      <Button type="submit">Comment</Button>
    </form>
  );
};
