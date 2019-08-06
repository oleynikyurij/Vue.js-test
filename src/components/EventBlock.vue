<template>
  <div class="item">
    <div class="item__logo">
      <img :src="getEvents[index].logo" alt />
    </div>
    <div class="line"></div>
    <div class="item__date">{{ getEvents[index].date}}</div>
    <div class="item__day">{{ getEvents[index].days}} days</div>
    <div class="item__count">
      <span>{{ getEvents[index].count}}</span> attendes
    </div>
    <div class="item__locate">{{ getEvents[index].adress}}</div>
  </div>
</template>
<script>
export default {
  name: "EventBlock",
  props: ["index"],
  data() {
    return {};
  },
  computed: {
    getEvents() {
      return this.$store.getters.getItems;
    }
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


