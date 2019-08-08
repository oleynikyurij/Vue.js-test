export default {
  state: {
		eventsList: [
			{
				logo: "static/img/event-1.jpg",
				nameEvent: 'name',
				itemLogoShow: true,
				date: "June 16-19 2019",
				days: 3,
				attends: 70000,
				city: " Lisbon ",
				venue: "Altis Arena"
			},
			{
				logo: "static/img/event-2.jpg",
				nameEvent: 'name',
				itemLogoShow: true,
				date: "June 16-19 2019",
				days: 3,
				attends: 700,
				city: "San Francisco",
				venue: "Altis Arena"
			},
			{
				logo: "static/img/event-3.jpg",
				nameEvent: 'name',
				itemLogoShow: true,
				date: "September 1-5 2019",
				days: 5,
				attends: 5,
				city: "London",
				venue: "Altis"
			},
			{
				logo: "static/img/event-4.jpg",
				nameEvent: 'name',
				itemLogoShow: true,
				date: "December 5 2019",
				days: 1,
				attends: 4000,
				city: "Berlin ",
				venue: "Arena"
			},
		
		],

	},
  mutations: {
		addNewEvent(state, payload) {
			state.eventsList.push(payload)
			
		}
	},
  actions: {

	},
	
	getters: {
		getItems (state) {
			// console.log('getters: getItems');
			return state.eventsList;
		},
		// getItem(state, index) {
		// 	console.log(state.eventsList[index]);
		// 	return state.eventsList[index];
		// }
	}
};


