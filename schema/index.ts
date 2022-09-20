import { importSchema } from 'graphql-import';
import { makeExecutableSchema} from '@graphql-tools/schema';
import {IResolvers} from '@graphql-tools/utils'
import resolvers from './resolvers';

const typeDefs = importSchema('schema/typeDefs.graphql');

export default makeExecutableSchema({ resolvers: resolvers as IResolvers, typeDefs });
