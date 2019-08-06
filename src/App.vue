<template>
  <div id="app">
		<HeaderBlock></HeaderBlock>
    <router-view/>
  </div>
</template>

<script>
import HeaderBlock from './components/HeaderBlock';
export default {
	name: 'App',
	components: { HeaderBlock }
};
</script>

<style>
@import './assets/css/reset.css';
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
 
}
</style>
