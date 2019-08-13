<template>
  <div class="item">
    <div class="item__logo">
      <img  alt
				v-if="item.logo_show"
				:src="item.logo"
			 />
			 <div class="item__title"
			 v-else
			 >{{item.name}}</div>
    </div>
    <div class="line"></div>
    <div class="item__date">{{ item.date}}</div>
    <!-- <div class="item__day">{{ item.days}} days</div> -->
    <div class="item__count">
      <span>{{ item.attehds}}</span> attendes
    </div>
    <div class="item__locate">{{ item.venue}}, {{item.city}}</div>
  </div>
</template>
<script>
export default {
  name: "EventBlock",
  props: ["item"],
  data() {
    return {
			nameEvent:"NAME",
			itemLogoShow: true
		};
  },
  computed: {
    // getEvents() {
    //   return this.$store.getters.getItems;
    // }
  }
};
</script>
<style lang="scss" scoped>
.item {
  width: 218px;
  // height: 232px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  &__logo {
    height: 100px;
    line-height: 100px;
	}
	&__title {
		background-color: rgb(246, 174, 198);
	}
  &__date {
    margin-top: 20px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
  &__day {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
  &__count {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    span {
      font-weight: 700;
    }
  }
  &__locate {
    margin-top: 30px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
  .line {
    width: 90%;
    height: 1px;
    background-color: #000;
    margin: auto;
  }
}
</style>


