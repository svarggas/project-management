import { gql } from 'graphql-tag';

const organization = gql`
  type Organization {
    id: String!
    name: String!
    description: String
    members: [User]
    projects: [Project]
    createdAt: String
    updatedAt: String
  }
`;

export default organization;