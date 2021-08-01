import { SchemaComposer } from 'graphql-compose';
import { userAccess } from '../utils';
import { authMutation, authQuery } from './auth';
import { commentMutation, commentQuery, commentSubscription } from './comment';
import { postQuery, postMutation, postSubscription } from './post';

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
    ...postQuery,
    ...commentQuery,
    ...userAccess({
        ...authQuery
    })
});

schemaComposer.Mutation.addFields({
    ...authMutation,
    ...userAccess({
        ...postMutation,
        ...commentMutation
    })
});

schemaComposer.Subscription.addFields({
    ...commentSubscription,
    ...postSubscription
})

export default schemaComposer.buildSchema();
