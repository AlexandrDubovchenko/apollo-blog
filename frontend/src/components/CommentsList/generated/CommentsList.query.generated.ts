import * as Types from '../../../generated/types';

import { CommentFragmentFragment } from '../../common/CommentForm/generated/Comment.fragment.generated';
import { gql } from '@apollo/client';
import { CommentFragmentFragmentDoc } from '../../common/CommentForm/generated/Comment.fragment.generated';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** The `ID` scalar type represents a unique MongoDB identifier in collection. MongoDB by default use 12-byte ObjectId value (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB also may accepts string or integer as correct values for _id field. */
  MongoID: any;
};

export type Auth = {
  __typename?: 'Auth';
  accessToken?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type Comment = {
  __typename?: 'Comment';
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  attachedToId?: Maybe<Scalars['MongoID']>;
  comments: Array<Comment>;
  _id: Scalars['MongoID'];
};


export type CommentCommentsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsCommentInput>;
};

/** A connection to a list of items. */
export type CommentConnection = {
  __typename?: 'CommentConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Information to aid in pagination. */
  edges: Array<CommentEdge>;
};

/** An edge in a connection. */
export type CommentEdge = {
  __typename?: 'CommentEdge';
  /** The item at the end of the edge */
  node: Comment;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type CommentInput = {
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  attachedToId?: Maybe<Scalars['MongoID']>;
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
};

/** List of items with pagination. */
export type CommentPagination = {
  __typename?: 'CommentPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<Comment>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type CommentTc = {
  __typename?: 'CommentTC';
  record?: Maybe<Comment>;
};

export type CreateManyCommentInput = {
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  attachedToId?: Maybe<Scalars['MongoID']>;
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type CreateManyCommentPayload = {
  __typename?: 'CreateManyCommentPayload';
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<Comment>>;
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateManyPostInput = {
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type CreateManyPostPayload = {
  __typename?: 'CreateManyPostPayload';
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<Post>>;
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};


export type ErrorInterface = {
  /** Generic error message */
  message?: Maybe<Scalars['String']>;
};

export type FilterCountCommentInput = {
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  attachedToId?: Maybe<Scalars['MongoID']>;
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountCommentOperatorsInput>;
  OR?: Maybe<Array<FilterCountCommentInput>>;
  AND?: Maybe<Array<FilterCountCommentInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountCommentOperatorsInput = {
  _id?: Maybe<FilterCountComment_IdOperatorsInput>;
};

export type FilterCountComment_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterCountPostInput = {
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountPostOperatorsInput>;
  OR?: Maybe<Array<FilterCountPostInput>>;
  AND?: Maybe<Array<FilterCountPostInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountPostOperatorsInput = {
  _id?: Maybe<FilterCountPost_IdOperatorsInput>;
};

export type FilterCountPost_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyCommentInput = {
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  attachedToId?: Maybe<Scalars['MongoID']>;
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyCommentOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyCommentInput>>;
  AND?: Maybe<Array<FilterFindManyCommentInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyCommentOperatorsInput = {
  _id?: Maybe<FilterFindManyComment_IdOperatorsInput>;
};

export type FilterFindManyComment_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyPostInput = {
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyPostOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyPostInput>>;
  AND?: Maybe<Array<FilterFindManyPostInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyPostOperatorsInput = {
  _id?: Maybe<FilterFindManyPost_IdOperatorsInput>;
};

export type FilterFindManyPost_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneCommentInput = {
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  attachedToId?: Maybe<Scalars['MongoID']>;
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneCommentOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneCommentInput>>;
  AND?: Maybe<Array<FilterFindOneCommentInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneCommentOperatorsInput = {
  _id?: Maybe<FilterFindOneComment_IdOperatorsInput>;
};

export type FilterFindOneComment_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOnePostInput = {
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOnePostOperatorsInput>;
  OR?: Maybe<Array<FilterFindOnePostInput>>;
  AND?: Maybe<Array<FilterFindOnePostInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOnePostOperatorsInput = {
  _id?: Maybe<FilterFindOnePost_IdOperatorsInput>;
};

export type FilterFindOnePost_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyCommentInput = {
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  attachedToId?: Maybe<Scalars['MongoID']>;
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManyCommentOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveManyCommentInput>>;
  AND?: Maybe<Array<FilterRemoveManyCommentInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyCommentOperatorsInput = {
  _id?: Maybe<FilterRemoveManyComment_IdOperatorsInput>;
};

export type FilterRemoveManyComment_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyPostInput = {
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManyPostOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveManyPostInput>>;
  AND?: Maybe<Array<FilterRemoveManyPostInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyPostOperatorsInput = {
  _id?: Maybe<FilterRemoveManyPost_IdOperatorsInput>;
};

export type FilterRemoveManyPost_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveOneCommentInput = {
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  attachedToId?: Maybe<Scalars['MongoID']>;
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveOneCommentOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveOneCommentInput>>;
  AND?: Maybe<Array<FilterRemoveOneCommentInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneCommentOperatorsInput = {
  _id?: Maybe<FilterRemoveOneComment_IdOperatorsInput>;
};

export type FilterRemoveOneComment_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveOnePostInput = {
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveOnePostOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveOnePostInput>>;
  AND?: Maybe<Array<FilterRemoveOnePostInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOnePostOperatorsInput = {
  _id?: Maybe<FilterRemoveOnePost_IdOperatorsInput>;
};

export type FilterRemoveOnePost_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyCommentInput = {
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  attachedToId?: Maybe<Scalars['MongoID']>;
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManyCommentOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateManyCommentInput>>;
  AND?: Maybe<Array<FilterUpdateManyCommentInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyCommentOperatorsInput = {
  _id?: Maybe<FilterUpdateManyComment_IdOperatorsInput>;
};

export type FilterUpdateManyComment_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyPostInput = {
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManyPostOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateManyPostInput>>;
  AND?: Maybe<Array<FilterUpdateManyPostInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyPostOperatorsInput = {
  _id?: Maybe<FilterUpdateManyPost_IdOperatorsInput>;
};

export type FilterUpdateManyPost_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateOneCommentInput = {
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  attachedToId?: Maybe<Scalars['MongoID']>;
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneCommentOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOneCommentInput>>;
  AND?: Maybe<Array<FilterUpdateOneCommentInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneCommentOperatorsInput = {
  _id?: Maybe<FilterUpdateOneComment_IdOperatorsInput>;
};

export type FilterUpdateOneComment_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateOnePostInput = {
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOnePostOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOnePostInput>>;
  AND?: Maybe<Array<FilterUpdateOnePostInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOnePostOperatorsInput = {
  _id?: Maybe<FilterUpdateOnePost_IdOperatorsInput>;
};

export type FilterUpdateOnePost_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type InputInput = {
  accessToken: Scalars['String'];
};


export type Mutation = {
  __typename?: 'Mutation';
  register?: Maybe<Auth>;
  login?: Maybe<Auth>;
  refreshToken?: Maybe<Auth>;
  authGoogle?: Maybe<Auth>;
  postCreateOne?: Maybe<PostTc>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  postCreateMany?: Maybe<CreateManyPostPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  postUpdateById?: Maybe<UpdateByIdPostPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  postUpdateOne?: Maybe<UpdateOnePostPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  postUpdateMany?: Maybe<UpdateManyPostPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  postRemoveById?: Maybe<RemoveByIdPostPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  postRemoveOne?: Maybe<RemoveOnePostPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  postRemoveMany?: Maybe<RemoveManyPostPayload>;
  commentCreate?: Maybe<CommentTc>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  commentCreateMany?: Maybe<CreateManyCommentPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  commentUpdateById?: Maybe<UpdateByIdCommentPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  commentUpdateOne?: Maybe<UpdateOneCommentPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  commentUpdateMany?: Maybe<UpdateManyCommentPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  commentRemoveById?: Maybe<RemoveByIdCommentPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  commentRemoveOne?: Maybe<RemoveOneCommentPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  commentRemoveMany?: Maybe<RemoveManyCommentPayload>;
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationAuthGoogleArgs = {
  input?: Maybe<InputInput>;
};


export type MutationPostCreateOneArgs = {
  record?: Maybe<PostInput>;
};


export type MutationPostCreateManyArgs = {
  records: Array<CreateManyPostInput>;
};


export type MutationPostUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdPostInput;
};


export type MutationPostUpdateOneArgs = {
  record: UpdateOnePostInput;
  filter?: Maybe<FilterUpdateOnePostInput>;
  sort?: Maybe<SortUpdateOnePostInput>;
  skip?: Maybe<Scalars['Int']>;
};


export type MutationPostUpdateManyArgs = {
  record: UpdateManyPostInput;
  filter?: Maybe<FilterUpdateManyPostInput>;
  sort?: Maybe<SortUpdateManyPostInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationPostRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};


export type MutationPostRemoveOneArgs = {
  filter?: Maybe<FilterRemoveOnePostInput>;
  sort?: Maybe<SortRemoveOnePostInput>;
};


export type MutationPostRemoveManyArgs = {
  filter: FilterRemoveManyPostInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationCommentCreateArgs = {
  record?: Maybe<CommentInput>;
  attachToId: Scalars['MongoID'];
  attachToType: ThreadsEnum;
};


export type MutationCommentCreateManyArgs = {
  records: Array<CreateManyCommentInput>;
};


export type MutationCommentUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdCommentInput;
};


export type MutationCommentUpdateOneArgs = {
  record: UpdateOneCommentInput;
  filter?: Maybe<FilterUpdateOneCommentInput>;
  sort?: Maybe<SortUpdateOneCommentInput>;
  skip?: Maybe<Scalars['Int']>;
};


export type MutationCommentUpdateManyArgs = {
  record: UpdateManyCommentInput;
  filter?: Maybe<FilterUpdateManyCommentInput>;
  sort?: Maybe<SortUpdateManyCommentInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationCommentRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};


export type MutationCommentRemoveOneArgs = {
  filter?: Maybe<FilterRemoveOneCommentInput>;
  sort?: Maybe<SortRemoveOneCommentInput>;
};


export type MutationCommentRemoveManyArgs = {
  filter: FilterRemoveManyCommentInput;
  limit?: Maybe<Scalars['Int']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  currentPage: Scalars['Int'];
  perPage: Scalars['Int'];
  pageCount?: Maybe<Scalars['Int']>;
  itemCount?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export type Post = {
  __typename?: 'Post';
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  comments: Array<Comment>;
  _id: Scalars['MongoID'];
};


export type PostCommentsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsCommentInput>;
};

/** A connection to a list of items. */
export type PostConnection = {
  __typename?: 'PostConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Information to aid in pagination. */
  edges: Array<PostEdge>;
};

/** An edge in a connection. */
export type PostEdge = {
  __typename?: 'PostEdge';
  /** The item at the end of the edge */
  node: Post;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type PostInput = {
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
};

/** List of items with pagination. */
export type PostPagination = {
  __typename?: 'PostPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<Post>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type PostTc = {
  __typename?: 'PostTC';
  record?: Maybe<Post>;
};

export type Query = {
  __typename?: 'Query';
  postById?: Maybe<Post>;
  postByIds: Array<Post>;
  postOne?: Maybe<Post>;
  postMany: Array<Post>;
  postCount?: Maybe<Scalars['Int']>;
  postConnection?: Maybe<PostConnection>;
  postPagination?: Maybe<PostPagination>;
  commentById?: Maybe<Comment>;
  commentByIds: Array<Comment>;
  commentOne?: Maybe<Comment>;
  commentMany: Array<Comment>;
  commentCount?: Maybe<Scalars['Int']>;
  commentConnection?: Maybe<CommentConnection>;
  commentPagination?: Maybe<CommentPagination>;
  getUser?: Maybe<User>;
};


export type QueryPostByIdArgs = {
  _id: Scalars['MongoID'];
};


export type QueryPostByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsPostInput>;
};


export type QueryPostOneArgs = {
  filter?: Maybe<FilterFindOnePostInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOnePostInput>;
};


export type QueryPostManyArgs = {
  filter?: Maybe<FilterFindManyPostInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyPostInput>;
};


export type QueryPostCountArgs = {
  filter?: Maybe<FilterCountPostInput>;
};


export type QueryPostConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManyPostInput>;
  sort?: Maybe<SortConnectionPostEnum>;
};


export type QueryPostPaginationArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterFindManyPostInput>;
  sort?: Maybe<SortFindManyPostInput>;
};


export type QueryCommentByIdArgs = {
  _id: Scalars['MongoID'];
};


export type QueryCommentByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsCommentInput>;
};


export type QueryCommentOneArgs = {
  filter?: Maybe<FilterFindOneCommentInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneCommentInput>;
};


export type QueryCommentManyArgs = {
  filter?: Maybe<FilterFindManyCommentInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyCommentInput>;
};


export type QueryCommentCountArgs = {
  filter?: Maybe<FilterCountCommentInput>;
};


export type QueryCommentConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManyCommentInput>;
  sort?: Maybe<SortConnectionCommentEnum>;
};


export type QueryCommentPaginationArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterFindManyCommentInput>;
  sort?: Maybe<SortFindManyCommentInput>;
};


export type QueryGetUserArgs = {
  accessToken: Scalars['String'];
};

export type RemoveByIdCommentPayload = {
  __typename?: 'RemoveByIdCommentPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Comment>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type RemoveByIdPostPayload = {
  __typename?: 'RemoveByIdPostPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Post>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type RemoveManyCommentPayload = {
  __typename?: 'RemoveManyCommentPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type RemoveManyPostPayload = {
  __typename?: 'RemoveManyPostPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type RemoveOneCommentPayload = {
  __typename?: 'RemoveOneCommentPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Comment>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type RemoveOnePostPayload = {
  __typename?: 'RemoveOnePostPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Post>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export enum SortConnectionCommentEnum {
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC'
}

export enum SortConnectionPostEnum {
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC'
}

export enum SortFindByIdsCommentInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsPostInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyCommentInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyPostInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneCommentInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOnePostInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneCommentInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOnePostInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateManyCommentInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateManyPostInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneCommentInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOnePostInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type Subscription = {
  __typename?: 'Subscription';
  commentCreated?: Maybe<Comment>;
  postCreated?: Maybe<Post>;
};


export type SubscriptionCommentCreatedArgs = {
  id: Scalars['ID'];
};

export enum ThreadsEnum {
  Post = 'POST',
  Comment = 'COMMENT'
}

export type UpdateByIdCommentInput = {
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  attachedToId?: Maybe<Scalars['MongoID']>;
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type UpdateByIdCommentPayload = {
  __typename?: 'UpdateByIdCommentPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Comment>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateByIdPostInput = {
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type UpdateByIdPostPayload = {
  __typename?: 'UpdateByIdPostPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Post>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateManyCommentInput = {
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  attachedToId?: Maybe<Scalars['MongoID']>;
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type UpdateManyCommentPayload = {
  __typename?: 'UpdateManyCommentPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateManyPostInput = {
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type UpdateManyPostPayload = {
  __typename?: 'UpdateManyPostPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateOneCommentInput = {
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  attachedToId?: Maybe<Scalars['MongoID']>;
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type UpdateOneCommentPayload = {
  __typename?: 'UpdateOneCommentPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Comment>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateOnePostInput = {
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  comments?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type UpdateOnePostPayload = {
  __typename?: 'UpdateOnePostPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Post>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type GetCommentsQueryVariables = Types.Exact<{
  ids?: Types.Maybe<Array<Types.Scalars['MongoID']> | Types.Scalars['MongoID']>;
  attachedToId: Types.Scalars['MongoID'];
}>;


export type GetCommentsQuery = (
  { __typename?: 'Query' }
  & { commentMany: Array<(
    { __typename?: 'Comment' }
    & CommentFragmentFragment
  )> }
);


export const GetCommentsDocument = gql`
    query GetComments($ids: [MongoID!], $attachedToId: MongoID!) {
  commentMany(
    filter: {_operators: {_id: {in: $ids}}, attachedToId: $attachedToId}
    sort: _ID_DESC
  ) {
    ...CommentFragment
  }
}
    ${CommentFragmentFragmentDoc}`;

/**
 * __useGetCommentsQuery__
 *
 * To run a query within a React component, call `useGetCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentsQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *      attachedToId: // value for 'attachedToId'
 *   },
 * });
 */
export function useGetCommentsQuery(baseOptions: Apollo.QueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, options);
      }
export function useGetCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, options);
        }
export type GetCommentsQueryHookResult = ReturnType<typeof useGetCommentsQuery>;
export type GetCommentsLazyQueryHookResult = ReturnType<typeof useGetCommentsLazyQuery>;
export type GetCommentsQueryResult = Apollo.QueryResult<GetCommentsQuery, GetCommentsQueryVariables>;