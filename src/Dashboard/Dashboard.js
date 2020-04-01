import React from 'react';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_USERS = gql`
  {
    users {
      name
      lastName
      age
      id
    }
  }
`;

const Dashboard = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return data.users.map((user) => <li key={user.id}>{user.name}</li>);
};

export default Dashboard;
