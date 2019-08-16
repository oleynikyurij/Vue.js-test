<template>
  <div id="app">
    <div class="content">
      <HeaderBlock></HeaderBlock>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <FooterBlock></FooterBlock>
  </div>
</template>

<script>
import HeaderBlock from "./components/HeaderBlock";
import FooterBlock from "./components/FooterBlock.vue";
export default {
  name: "App",
  components: { HeaderBlock, FooterBlock }
};
</script>

<style>
@import "./assets/css/reset.css";
@import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap");
@import url("https://fonts.googleapis.com/css?family=Righteous&display=swap");
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}
.content {
  flex-grow: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
