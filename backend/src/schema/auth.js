import { register, login, refreshToken, authGoogle, getUser } from '../resolvers/auth'

const authQuery = {
  getUser,
};

const authMutation = {
  register,
  login,
  refreshToken,
  authGoogle
};

export { authMutation, authQuery }
