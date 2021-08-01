/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { PostCard } from "../PostCard";
import { useGetPostsQuery } from "./generated/Post.query.generated";
import { PostCreatedDocument } from "./generated/Post.subscription.generated";
import styles from "./styles.module.scss";

export const PostList: FC = () => {
  const { data, error, subscribeToMore } = useGetPostsQuery();

  useEffect(() => {
    subscribeToMore({
      document: PostCreatedDocument,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        // @ts-ignore
        const newFeedItem = subscriptionData.data.postCreated;
        return { ...prev, postMany: [newFeedItem, ...prev.postMany] };
      },
    });
  }, [subscribeToMore]);

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      {data?.postMany.map((post) => (
        <div key={post._id} className={styles.card}>
          <Link to={`/post/${post._id}`}>
            <PostCard post={post} />
          </Link>
        </div>
      ))}
    </div>
  );
};
