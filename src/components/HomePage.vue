<template>
  <div class="wrap">
    <h3 class="events__title">Events: {{ listEvents.length }}</h3>
    <div class="event__filter">
      <div>
        <button class="btn__filters btn">all dates</button>
        <button class="btn__filters btn" @click="Modal">all tags</button>
        <button class="btn__filters btn">all speakers</button>
      </div>
      <div>
        <button class="btn btn__popular active">popular</button>
        <span class="line"></span>
        <button class="btn btn__popular">nearest</button>
      </div>
    </div>
    <div class="events__blocks">
      <EventBlock v-for="item in listEvents" :key="item.id" :item="item"></EventBlock>
    </div>

    <router-link to="/form">
      <button class="btn__add">TELL US ABOUT MISSED HR EVENT</button>
    </router-link>

    <!-- Фильтрация по городам -->

    <div class="modal" v-if="showModal">
      <div class="popup">
        <div class="top">
          <span class="close" @click="closemodal">X</span>
          <h5>{{ getCity() }}</h5>
          <input
            type="text"
            class="search"
                        
          />
          <p>WORLD</p>
          <div class="city-list">
            <span
              class="city-item"
              v-for="(item, index) in city"
              :key="index"
              
            >{{item.city}}</span>
          </div>
        </div>
        <div class="city-btn">
          <button class="btn btn__clear">clear</button>
          <button class="btn btn__apply">apply</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBlock from "./EventBlock";
import gql from "graphql-tag";

export default {
  name: "HomePage",
  data() {
    return {
      
			listEvents: [],
			city:[],
			showModal: false
    };
  },
  apollo: {
    getListEvents: {
      query: gql`
        {
          events {
            id
            city
            logo
            logo_show
            name
            venue
            date
            attehds
          }
        }
			`,
			result({data}) {
				this.listEvents = data.events
			}
	},
			getListCity: {
      query: gql`
        {
          events {
           city
          
          }
        }
			`,
			result({data}) {
				this.city = data.events
			}
    }
	},
	
  components: {
    EventBlock
  },

  methods: {
    clearInput() {
      // this.$store.commit("changeCity", "world");
      // this.localCity = "";
    },
    initialValueCity() {
      // this.clearInput();
      // let initial = this.$store.getters.getInitialCityList;
      // this.$store.commit("changeCityList", initial);
    },

    checkCity($event) {
      // this.changeCity;
      // console.log($event.target.innerHTML);
      // this.localCity = $event.target.innerHTML;
      // this.$store.commit("changeCity", this.localCity);
    },
    getCity() {
      // return this.$store.getters.getCity;
    },
    closemodal() {
			
			this.showModal = false
		},
		Modal() {
		
			this.showModal = true
    },
    searchCity($event) {
      // console.log($event.target.value)
      // let city = $event.target.value.toLowerCase();
      // this.localCityList = this.$store.getters.getCityList;
      // let a = this.localCityList.filter(el => {
      //   if (city == "world" || city == "") {
      //     return true;
      //   } else {
      //     return el.toLowerCase().indexOf(city) > -1;
      //   }
      // });
      // // console.log(a, 'this.localCityList')
      // this.$store.commit("changeCityList", a);
    },
    filterEvent() {
      // let city = this.getCity().toLowerCase();
      // let list = this.getEvents.filter(
      //   el => el.city.toLowerCase().trim() == city
      // );
      // // console.log(list);
      // this.$store.commit("changeShowModal");
      // this.$store.commit("setEventFilter");
      // return list;
    },
    resetFilter() {
      // this.initialValueCity();
      // this.listEvents();
      // this.$store.commit("setEventFilter");
      // this.closemodal();
      // console.log('resetfilter');
    }
  },

  computed: {
    // getEvents() {
    //   // return this.$store.getters.getItems;
    // },

    
    // getCityList() {
    //   // return this.$store.getters.getCityList;
    // },
    // listEvents() {
    //   // if (!this.$store.getters.getEventFilter) {
    //   //   return this.$store.getters.getItems;
    //   // } else {
    //   //   return this.filterEvent();
    //   // }
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.wrap {
  max-width: 920px;
  margin: 0 auto;
}
.line {
  display: inline-block;
  width: 2px;
  height: 12px;
  background-color: #bcbccb;
}
.events__title {
  padding: 25px 0;
  font-size: 26px;
  font-weight: 700;
  line-height: 12px;
  text-align: left;
}
.event__filter {
  display: flex;
  justify-content: space-between;

  margin-bottom: 12px;
  .btn {
    border: none;
    background-color: transparent;
    outline: none;
    &__filters {
      font-size: 14px;
      font-weight: 500;
      line-height: 12px;
      padding-right: 20px;
      margin-right: 40px;
      position: relative;
      &:after {
        display: block;
        content: "";
        position: absolute;
        right: -10px;
        bottom: -3px;
        border: 6px solid transparent;
        border-top: 6px solid #000;
      }
    }
    &__popular {
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.13px;
      padding-bottom: 4px;
      &.active {
        border-bottom: 1px solid #000;
      }
    }
  }
}
.events__blocks {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 12px 0 28px;
}
.btn__add {
  width: 100%;
  padding: 15px;
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-transform: uppercase;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
}

// modal
.modal {
  // display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.16);
}
.popup {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 25%;
  left: 50%;
  transform: translateY(-25%);
  transform: translateX(-50%);
  background-color: #fff;
  width: 465px;
  height: 409px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  padding-bottom: 20px;
}
.top {
  position: relative;
  padding: 20px;
  .close {
    position: absolute;
    top: 15px;
    right: 15px;
    border-radius: 50%;
    border: 1px solid #000;
    padding: 1px 5px;
    cursor: pointer;
  }
  h5 {
    min-height: 15px;
    font-size: 22px;
    font-weight: 700;
    line-height: 12px;
    margin-bottom: 15px;
  }
  .search {
    height: 40px;

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
    margin-bottom: 25px;
    &:focus {
      box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.62);
      border: none;
    }
  }
  p {
    font-size: 16px;
    font-weight: 700;
    line-height: 12px;
    text-transform: uppercase;
    margin-bottom: 15px;
  }
  .city-list {
    display: flex;
    flex-wrap: wrap;
    margin-left: -20px;
  }
  .city-item {
    margin-left: 20px;
    margin-bottom: 10px;
  }
}
.city-btn {
  margin-left: auto;
  margin-right: 20px;
  .btn {
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-transform: uppercase;
    padding: 10px 30px;
  }
  .btn__clear {
    color: #ec254d;
    background-color: #fff;
    margin-right: 10px;
  }
  .btn__apply {
    color: #ffffff;
    background-color: #ec254d;
  }
}
</style>