import mongoose, { Schema } from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";
import { pubsub, subscriptionsEvents } from "../subscriptions";

export const CommentSchema = new Schema({
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
  attachedToId: Schema.ObjectId,
  comments: {
    type: [Schema.ObjectId],
    ref: 'Comment'
  }
});

CommentSchema.pre('save', function (next) {
  pubsub.publish(subscriptionsEvents.COMMENT_CREATED, this)
  next();
});


export const Comment = mongoose.model('Comment', CommentSchema);
export const CommentTC = composeWithMongoose(Comment);
