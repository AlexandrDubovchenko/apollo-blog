import mongoose, { Schema } from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String
  },
  googleId: {
    type: String
  }
});

export const User = mongoose.model('User', UserSchema);
export const UserTC = composeWithMongoose(User);
