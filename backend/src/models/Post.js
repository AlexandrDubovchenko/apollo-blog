import mongoose, { Schema } from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";
import { pubsub, subscriptionsEvents } from "../subscriptions";

export const PostSchema = new Schema({
  title: {
    type: String,
  },
  author: {
    type: String
  },
  body: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  comments: {
    type: [Schema.ObjectId],
    ref: 'Comment'
  }
});

PostSchema.pre('save', function(next) {
  pubsub.publish(subscriptionsEvents.POST_CREATED, this)
  next();
});

export const Post = mongoose.model('Post', PostSchema);
export const PostTC = composeWithMongoose(Post);
