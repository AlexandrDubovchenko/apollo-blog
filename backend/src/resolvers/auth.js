import { schemaComposer, toInputObjectType } from "graphql-compose";
import { User } from "../models/User";
import jwt from "jsonwebtoken";
import { ForbiddenError, AuthenticationError } from "apollo-server";
import { OAuth2Client } from "google-auth-library";




const oAuth2Client = new OAuth2Client(
  process.env.CLIENT_ID,
  process.env.CLIENT_SERCRET,
);


const SECRET = "TEST"


const InputTC = schemaComposer.createObjectTC(`
  type Input {
    accessToken: String!
  }
`);

const InputITC = toInputObjectType(InputTC);

export const register = schemaComposer.createResolver({
  name: 'register',
  type: `type Auth { accessToken: String, refreshToken: String }`,
  args: {
    email: 'String!', password: 'String!',
  },
  resolve: async ({ args: { email, password } }) => {
    try {
      const user = new User({ email, password })
      await user.save()
      return {
        accessToken: jwt.sign({ id: user.id, email }, SECRET, { expiresIn: 100000 }),
        refreshToken: jwt.sign({ id: user.id, email }, SECRET, { expiresIn: '60d' })
      }
    } catch (error) {
      return new ForbiddenError('User already exist')
    }
  }
});

export const getUser = schemaComposer.createResolver({
  name: 'getUser',
  type: `type User { email: String, _id: MongoID }`,
  args: {
    accessToken: 'String!'
  },
  resolve: async ({ args: { accessToken } }) => {
    const { email } = jwt.decode(accessToken)
    try {
      const user = await User.findOne({ email }).exec();
      if (user) {
        return {
          _id: user.id,
          email: user.email
        }
      }
      return new AuthenticationError('User does not exist')

    } catch (error) {
      return new AuthenticationError(error)
    }
  }
});

export const login = schemaComposer.createResolver({
  name: 'login',
  type: `type Auth { accessToken: String, refreshToken: String }`,
  args: {
    email: 'String!', password: 'String!',
  },
  resolve: async ({ args: { email, password } }) => {
    try {
      const user = await User.findOne({ email }).exec();
      if (user && user.password === password) {
        return {
          accessToken: jwt.sign({ id: user.id, email }, SECRET, { expiresIn: 100000 }),
          refreshToken: jwt.sign({ id: user.id, email }, SECRET, { expiresIn: '60d' })
        }
      }
      return new ForbiddenError('Wrong email or password')

    } catch (error) {
      return new ForbiddenError(error)
    }
  }
});
export const refreshToken = schemaComposer.createResolver({
  name: 'refreshToken',
  type: `type Auth { accessToken: String, refreshToken: String }`,
  args: {
    refreshToken: 'String!',
  },
  resolve: async ({ args: { refreshToken } }) => {
    try {
      const { id, email } = jwt.decode(refreshToken)
      const user = User.findById(id)
      if (user) {
        return { accessToken: jwt.sign({ id, email }, SECRET, { expiresIn: 100000 }), refreshToken }
      }
      return new ForbiddenError('User not found')

    } catch (error) {
      return new ForbiddenError(error)
    }
  }
});

export const authGoogle = schemaComposer.createResolver({
  name: 'authGoogle',
  type: `type Auth { accessToken: String, refreshToken: String }`,
  args: {
    input: InputITC,
  },
  resolve: async ({ args, context: { res, req, next } }) => {
    try {
      const data = await oAuth2Client.verifyIdToken({ idToken: args.input.accessToken, audience: process.env.CLIENT_ID })
      const payload = data.getPayload()
      const user = await User.findOne({ googleId: payload.sub })
      console.log(user);
      if (user) {
        return {
          accessToken: jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: 100000 }),
          refreshToken: jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: '60d' })
        }
      }
      const newUserData = {
        email: payload.email,
        googleId: payload.sub,
      }
      const newUser = new User(newUserData)
      await newUser.save()
      console.log(newUserData);
      return {
        accessToken: jwt.sign({ id: user.id, email: payload.email }, SECRET, { expiresIn: 100000 }),
        refreshToken: jwt.sign({ id: user.id, email: payload.email }, SECRET, { expiresIn: '60d' })
      }
    } catch (error) {
      return new ForbiddenError(error?.message)
    }

  }
});

