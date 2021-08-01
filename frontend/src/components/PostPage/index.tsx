/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC } from "react";
import { useParams } from "react-router-dom";
import { PostCard } from "../PostCard";
import styles from "./styles.module.scss";
import { usePostQuery } from "./generated/Post.query.generated";
import { CommentForm } from "../common/CommentForm";
import { ThreadsEnum } from "../../generated/types";
import { CommentList } from "../CommentsList";

interface ParamTypes {
  id: string;
}

export const PostPage: FC = () => {
  const { id } = useParams<ParamTypes>();
  const { data, error, loading } = usePostQuery({
    variables: {
      id,
    },
  });

  if (error || !data?.postById) {
    return <p>{error?.message || "No post"}</p>;
  }
  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <div className={styles.root}>
      <PostCard post={data.postById} />
      <div className={styles.form}>
        <CommentForm attachToId={id} attachToType={ThreadsEnum.Post} />
      </div>
      <div className={styles.comments}>
        <CommentList commentIds={data.postById.comments} attachedToId={id} />
      </div>
    </div>
  );
};
