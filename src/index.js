import React from 'react';
import ReactDOM from 'react-dom';
import {gql, graphql, ApolloProvider} from 'react-apollo';
import ApolloClient, {createNetworkInterface} from 'apollo-client';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeDefault from './theme-default';
import 'bootstrap/dist/css/bootstrap.css';

injectTapEventPlugin();

const client = new ApolloClient({
    networkInterface: createNetworkInterface({uri: 'https://api.graph.cool/simple/v1/cj3aqdwon1vgu0147c89t7tti'}),
    dataIdFromObject: o => o.id
})

ReactDOM.render(
    <ApolloProvider client={client}>
    <MuiThemeProvider>
        <App/>
    </MuiThemeProvider>
</ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
