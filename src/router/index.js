import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import FormPage from '@/components/FormPage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
		},
		{
			path: '/form',
      name: 'FormPage',
      component: FormPage,
		}
  ],
});
