import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, hashHistory, IndexRoute} from 'react-router'

import App from './Components/App'

const client = new ApolloClient({
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
  		<App/>
  	)
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);

