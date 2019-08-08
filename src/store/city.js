export default {
  state: {
    showModal: false,
    city: 'world',
    cityList: [
      
		],
		initialCityList: [
      'Los Angeles, Ca',
      'Las Vegas, NY',
      'San Francisco, NV',
      'Paris',
      'London',
      'Berlin',
    ],
  },
  mutations: {
    changeShowModal(state) {
      state.showModal = !state.showModal;
		},
		changeCity(state, payload) {
			state.city = payload
		},
		changeCityList(state, payload) {
			state.cityList = payload
		},
		addNewCity(state, payload){
			// console.log('addNewCity', payload.city);
			state.cityList.indexOf(payload.city) > -1 ? 
			 state.cityList=state.cityList : state.cityList.push(payload.city) ;
		}

  },
  actions: {},
  getters: {
    getCity(state) {
      return state.city;
    },
    getCityList(state) {
      return state.cityList;
    },
    getInitialCityList(state) {
      return state.initialCityList;
    },
    showModal(state) {
      return state.showModal;
    },
  },
};
