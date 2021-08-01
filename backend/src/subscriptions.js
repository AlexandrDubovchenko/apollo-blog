import { PubSub } from "apollo-server"

const pubsub = new PubSub()

const subscriptionsEvents = { COMMENT_CREATED: 'COMMENT_CREATED', POST_CREATED: 'POST_CREATED' }

export { pubsub, subscriptionsEvents }
