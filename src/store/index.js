
import Vue from 'vue';
import Vuex from 'vuex';

import  events  from './events';
import city from './city'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    events,
    city,
    
	},
	strict: process.env.NODE_ENV !== 'production'
});
