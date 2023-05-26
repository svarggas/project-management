import { mergeTypeDefs } from "@graphql-tools/merge";
import { gql } from 'graphql-tag';

import organization from "./organization";
import project from "./project";
import task from "./task";
import user from "./user";

const graph = gql`
    type Query {
        getOrganization(id: String!): Organization
        getProject(id: String!): Project
    }
    
    type Mutation {
        createOrganization(name: String!, description: String): Boolean
        deleteOrganization(id: String!): Boolean
        updateOrganization(id: String!, name: String, description: String, members: [String], projects: [String]): Organization

        createProject(name: String!, description: String): Boolean
        deleteProject(id: String!): Boolean
        updateProject(id: String!, name: String, description: String, organization: String, members: [String], tasks: [String]): Project
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