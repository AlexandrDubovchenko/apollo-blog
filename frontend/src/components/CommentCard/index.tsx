/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, useMemo, useState } from "react";
import moment from "moment";
import styles from "./styles.module.scss";
import { CommentFragmentFragment } from "../common/CommentForm/generated/Comment.fragment.generated";
import { CommentForm } from "../common/CommentForm";
import { ThreadsEnum } from "../../generated/types";

type CommentCardProps = {
  comment: CommentFragmentFragment;
};

export const CommentCard: FC<CommentCardProps> = ({ children, comment }) => {
  const [isCommentInput, setIsCommentInput] = useState(false);
  const timeAgo = useMemo(() => moment(comment.date).fromNow(), [comment.date]);
  const showCommentInput = () => {
    setIsCommentInput(true);
  };
  const hideCommentInput = () => {
    setIsCommentInput(false);
  };
  return (
    <div className={styles.root}>
      <header>
        <span className={styles.author}>{comment.author}</span>
        <span className={styles.time}>{timeAgo}</span>
      </header>
      <p className={styles.body}>{comment.body}</p>
      <footer>
        {isCommentInput ? (
          <button onClick={hideCommentInput} type="button">
            Close
          </button>
        ) : (
          <button onClick={showCommentInput} type="button">
            Reply
          </button>
        )}
      </footer>
      {isCommentInput && (
        <CommentForm
          attachToId={comment._id}
          attachToType={ThreadsEnum.Comment}
        />
      )}
      <div className={styles.comments}>{children}</div>
    </div>
  );
};
