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
        getTask(id: String!): Task
        getUser(id: String!): User
    }
    
    type Mutation {
        createOrganization(name: String!, description: String): Boolean
        deleteOrganization(id: String!): Boolean
        updateOrganization(id: String!, name: String, description: String, members: [String], projects: [String]): Organization

        createProject(name: String!, description: String): Boolean
        deleteProject(id: String!): Boolean
        updateProject(id: String!, name: String, description: String, organization: String, members: [String], tasks: [String]): Project

        createTask(name: String!, description: String, type: TaskType): Boolean
        deleteTask(id: String!): Boolean
        updateTask(id: String!, name: String, description: String, type: TaskType, status: TaskStatus, projectAssigned: String, userAssigned: String): Task

        createUser(name: String!, email: String!): Boolean
        deleteUser(id: String!): Boolean
        updateUser(id: String!, name: String, email: String, organization: String, projects: [String], tasksAssigned: [String]): User
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