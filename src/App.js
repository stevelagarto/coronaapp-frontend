import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Dashboard from './Dashboard/Dashboard';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
});

const App = () => (
   <ApolloProvider client={client}>
    <div>
      <Dashboard/>
    </div>
  </ApolloProvider>
);
  
export default App;
