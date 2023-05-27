import { gql } from 'graphql-tag';

const task = gql`
  enum TaskStatus {
    BACKLOG 
    IN_PROGRESS
    QA
    ON_REVIEW
    UAT
    DONE
  }

  enum TaskType {
    BUG
    FEATURE
    REQUEST
    OTHER
  }

  type Task {
    id: String!
    name: String!
    description: String
    type: TaskType
    status: TaskStatus
    project: Project
    user: User
    createdAt: String
    updatedAt: String
  }
`;

export default task;