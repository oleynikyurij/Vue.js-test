// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'


// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
	uri: 'https://vue-hasura-test.herokuapp.com/v1/graphql',
	headers: {
    'x-hasura-admin-secret': 'hasuratest'
  }
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
	link: httpLink,
	
  cache,
})
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})


Vue.use(VueApollo);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  apolloProvider,
  components: { App },
  template: '<App/>',
});
