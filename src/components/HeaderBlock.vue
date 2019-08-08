<template>
  <div class="wrap">
  	<header class="header">
	   
	   	 <div class="header__logo">
		      <h1 class="header__h1">
		        <router-link to="/">CONGURU</router-link>
		      </h1>
		    </div>
		    <span class="line"></span>
		    <button class="header__btn header__btn--world" @click="cityFilter">
		      {{getCity()}}
		    </button>
		      <img src="../assets/img/marker.svg" alt="marker" />
		   <input type="text" class="header__search" placeholder="conferences, events, topics, speakers…" />
		    <button class="header__btn">
		      <img src="../assets/img/like.svg" alt="like" />
		    </button>
		    <span class="line"></span>
		    <button class="header__btn">
		      <img src="../assets/img/people.svg" alt="people" />
		    </button>
	   
	  </header>
  </div>
</template>

<script>
export default {
  name: "HeaderBlock",
  data() {
    return {};
  },
  methods: {
    cityFilter() {
			let initial = this.$store.getters.getInitialCityList
			this.$store.commit('changeCityList', initial)
			this.$store.commit("changeShowModal");
			
    },
    getCity() {
      return this.$store.getters.getCity;
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.wrap {
	
  margin: 0 auto;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.16);
}
.header {
	
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 920px;
  margin: 0 auto;
  height: 60px;
  background-color: #ffffff;
  &__logo {
    padding-right: 17px;
    .header__h1 {
      font-family: Righteous;
      font-size: 22px;
      font-weight: 400;
      line-height: 20px;
      text-transform: uppercase;
      margin: 0;
      text-decoration: none;
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
  &__btn {
    border: none;
    background-color: transparent;
    outline: none;
    height: 33px;
    transition: all 0.3s ease-in;
    &:hover {
      box-shadow: 5px 5px 5px 0px rgba(230, 227, 227, 0.62);
    }
    &--world {
      margin-right: 20px;
			white-space: nowrap;
    }
  }
      img {
        margin-right: 12px;
      }
  &__search {
    height: 40px;
    max-width: 581px;
    width: 100%;
    border-radius: 4px;
    outline: none;
    border: none;
    background: #ededed url("../assets/img/search.svg") 12px center no-repeat;
    color: #707070;
    font-size: 16px;
    letter-spacing: 0.15px;
    padding-left: 50px;
    margin-right: 12px;
    &:focus {
      box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.62);
      border: none;
    }
  }
  .line {
    display: inline-block;
    width: 2px;
    height: 30px;
    background-color: #bcbccb;
  }
}
</style>



