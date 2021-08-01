import { UserInputError } from "apollo-server";
import { schemaComposer } from "graphql-compose";
import { Post, PostTC } from "../models/Post";

export const postCreate = schemaComposer.createResolver({
  type: `type PostTC { record: ${PostTC.getType()} }`,
  name: 'postCreate',
  args: { record: PostTC.getInputType()},
  resolve: async ({ args: { record } }) => {
    try {
      const post = new Post(record);
      await post.save()
      return { record: Post.findById(post.id) }

    } catch (error) {
      return new UserInputError(error)
    }
  }
})
