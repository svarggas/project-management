import { gql } from 'graphql-tag';

const project = gql`
  type Project {
    id: String!
    name: String!
    description: String
    organization: Organization!
    members: [User]
    tasks: [Task]
    createdAt: String
    updatedAt: String
  }
`;

export default project;