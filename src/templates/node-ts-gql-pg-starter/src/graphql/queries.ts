import { QueryResolvers } from './generated/graphql';

export const Query: Required<QueryResolvers> = {
  hello: (_root, _args, _ctx, _info) => {
    return 'Hello world !';
  },
};
