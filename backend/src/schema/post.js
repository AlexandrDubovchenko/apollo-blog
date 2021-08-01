import { CommentTC } from "../models/Comment";
import { PostTC, Post } from "../models/Post";
import { postCreate } from "../resolvers/post";
import { pubsub, subscriptionsEvents } from "../subscriptions";

const postQuery = {
  postById: PostTC.getResolver('findById'),
  postByIds: PostTC.getResolver('findByIds'),
  postOne: PostTC.getResolver('findOne'),
  postMany: PostTC.getResolver('findMany'),
  postCount: PostTC.getResolver('count'),
  postConnection: PostTC.getResolver('connection'),
  postPagination: PostTC.getResolver('pagination'),
};

const postMutation = {
  postCreateOne: postCreate,
  postCreateMany: PostTC.getResolver('createMany'),
  postUpdateById: PostTC.getResolver('updateById'),
  postUpdateOne: PostTC.getResolver('updateOne'),
  postUpdateMany: PostTC.getResolver('updateMany'),
  postRemoveById: PostTC.getResolver('removeById'),
  postRemoveOne: PostTC.getResolver('removeOne'),
  postRemoveMany: PostTC.getResolver('removeMany'),
};

const postSubscription = {
  postCreated: {
    type: PostTC,
    resolve: (_id) => Post.findById(_id),
    subscribe: () => pubsub.asyncIterator([subscriptionsEvents.POST_CREATED])
  }
}

PostTC.addRelation('comments', {
  resolver: () => CommentTC.getResolver('findByIds'),
  prepareArgs: {
    _ids: source => source.comments || [],
  },
  projection: { comments: true },
})

export { postQuery, postMutation, postSubscription };
