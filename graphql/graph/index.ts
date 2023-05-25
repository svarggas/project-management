import { mergeTypeDefs } from "@graphql-tools/merge";
import { gql } from 'graphql-tag';

import organization from "./organization";
import project from "./project";
import task from "./task";
import user from "./user";

const graph = gql`
    type Query {
        hello: String!
        getOrganization(id: String!): Organization
    }
`;

const types = [
    graph,
    organization,
    project,
    task,
    user,
];

export default mergeTypeDefs(types);