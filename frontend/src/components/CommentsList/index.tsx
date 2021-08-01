import React, { FC, useEffect } from "react";
import { CommentCard } from "../CommentCard";
import {
  Maybe,
  Scalars,
  useGetCommentsQuery,
} from "./generated/CommentsList.query.generated";
import { CommentCreatedDocument } from "./generated/CommentsList.subscription.generated";

type CommentList = {
  commentIds: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  attachedToId: Scalars["MongoID"];
};

export const CommentList: FC<CommentList> = ({ commentIds, attachedToId }) => {
  const { data, loading, error, subscribeToMore } = useGetCommentsQuery({
    variables: {
      ids: commentIds?.map((c) => c._id),
      attachedToId,
    },
  });

  useEffect(() => {
    const unsubscribe = subscribeToMore({
      document: CommentCreatedDocument,
      variables: { id: attachedToId },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        return {
          ...prev,
          commentMany: [
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            subscriptionData.data.commentCreated,
            ...prev.commentMany,
          ],
        };
      },
    });
    return () => unsubscribe();
  }, [subscribeToMore, attachedToId]);

  if (loading || error || !data?.commentMany.length) {
    return null;
  }

  return (
    <div>
      {data.commentMany.map((comment) => (
        <CommentCard key={comment._id} comment={comment}>
          <CommentList
            attachedToId={comment._id}
            commentIds={comment.comments}
          />
        </CommentCard>
      ))}
    </div>
  );
};
