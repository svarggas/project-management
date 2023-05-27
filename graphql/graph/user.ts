import { gql } from 'graphql-tag';

const user = gql`
  type User {
    id: String!
    email: String!
    name: String!
    organization: Organization
    projects: [Project]
    tasksAssigned: [Task]
    createdAt: String
    updatedAt: String
  }
`;

export default user;