import { commentCreate } from '../resolvers/comment'
import { Comment, CommentTC } from "../models/Comment";
import { pubsub, subscriptionsEvents } from '../subscriptions';
import { withFilter } from 'apollo-server';

const commentQuery = {
  commentById: CommentTC.getResolver('findById'),
  commentByIds: CommentTC.getResolver('findByIds'),
  commentOne: CommentTC.getResolver('findOne'),
  commentMany: CommentTC.getResolver('findMany'),
  commentCount: CommentTC.getResolver('count'),
  commentConnection: CommentTC.getResolver('connection'),
  commentPagination: CommentTC.getResolver('pagination'),
};



const commentMutation = {
  commentCreate: commentCreate,
  commentCreateMany: CommentTC.getResolver('createMany'),
  commentUpdateById: CommentTC.getResolver('updateById'),
  commentUpdateOne: CommentTC.getResolver('updateOne'),
  commentUpdateMany: CommentTC.getResolver('updateMany'),
  commentRemoveById: CommentTC.getResolver('removeById'),
  commentRemoveOne: CommentTC.getResolver('removeOne'),
  commentRemoveMany: CommentTC.getResolver('removeMany'),
};

const commentSubscription = {
  commentCreated: {
    type: CommentTC,
    args: { id: 'ID!' },
    resolve: (_id) => Comment.findById(_id),
    subscribe: withFilter(() => pubsub.asyncIterator([subscriptionsEvents.COMMENT_CREATED]), (payload, variables) => {
      return (payload.attachedToId.toString() === variables.id);
    })
  }
}

CommentTC.addRelation('comments', {
  resolver: () => CommentTC.getResolver('findByIds'),
  prepareArgs: {
    _ids: source => source.comments || [],
  },
  projection: { comments: true },
})

export { commentQuery, commentMutation, commentSubscription };
