import moment from "moment";
import { FC, useMemo } from "react";
import { PostFragmentFragment } from "../PostList/generated/Post.fragment.generated";
import styles from "./styles.module.scss";

type PostProps = { post: PostFragmentFragment };

export const PostCard: FC<PostProps> = ({ post }) => {
  const timeAgo = useMemo(() => moment(post.date).fromNow(), [post.date]);
  return (
    <div className={styles.root}>
      <aside className={styles.sidebar}>
        <button type="button">
          <img
            width="20"
            height="20"
            src="/icons/up-arrow-hand-drawn-outline-svgrepo-com.svg"
            alt="upvote"
          />
        </button>
        <span>VOTE</span>
        <button className={styles.down} type="button">
          <img
            width="20"
            height="20"
            src="/icons/up-arrow-hand-drawn-outline-svgrepo-com.svg"
            alt="upvote"
          />
        </button>
      </aside>
      <div className={styles.main}>
        <header className={styles.header}>
          <span>
            Posted by {post.author} {timeAgo}
          </span>
        </header>
        <main className={styles.body}>
          <h3 className={styles.title}>{post.title}</h3>
          <p className={styles.text}>{post.body}</p>
        </main>
        <footer className={styles.footer}>
          <button type="button">0 Comments</button>
        </footer>
      </div>
    </div>
  );
};
