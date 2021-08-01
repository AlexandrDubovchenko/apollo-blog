import { UserInputError } from "apollo-server";
import { schemaComposer } from "graphql-compose";
import { Comment, CommentTC } from "../models/Comment";
import { Post } from "../models/Post";
import { ThreadsEnum, ThreadsETC } from "../types/enums";

export const commentCreate = schemaComposer.createResolver({
  type: `type CommentTC { record: ${CommentTC.getType()} }`,
  name: 'commentCreate',
  args: { record: CommentTC.getInputType(), attachToId: 'MongoID!', attachToType: `${ThreadsETC.getTypeName()}!` },
  resolve: async ({ args: { record, attachToType, attachToId } }) => {
    try {
      const comment = new Comment({...record, attachedToId: attachToId});
      await comment.save()
      switch (attachToType) {
        case ThreadsEnum.POST:
          await Post.updateOne({ _id: attachToId }, { $push: { comments: comment } })
        case ThreadsEnum.COMMENT:
          await Comment.updateOne({ _id: attachToId }, { $push: { comments: comment } })
      }
      return { record: Comment.findById(comment.id) }

    } catch (error) {
      return new UserInputError(error)
    }
  }
})
