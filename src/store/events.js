export default {
  state: {
		eventsList: [
			{
				logo: "static/img/event-1.jpg",
				date: "June 16-19 2019",
				days: 3,
				count: 70000,
				adress: "Altis Arena, Lisbon "
			},
			{
				logo: "static/img/event-2.jpg",
				date: "June 16-19 2019",
				days: 30,
				count: 700,
				adress: "Altis Arena, San Francisco"
			},
			{
				logo: "static/img/event-3.jpg",
				date: "September 1-5 2019",
				days: 30,
				count: 5,
				adress: "Altis, London"
			},
			{
				logo: "static/img/event-4.jpg",
				date: "December 5 2019",
				days: 30,
				count: 4000,
				adress: "Arena, Berlin "
			},
			// {
			// 	logo: "static/img/event-4.jpg",
			// 	date: "December 5 2019",
			// 	days: "30 days",
			// 	count: "4000",
			// 	adress: "Arena, Berlin "
			// },
			// {
			// 	logo: "static/img/event-4.jpg",
			// 	date: "December 5 2019",
			// 	days: "30 days",
			// 	count: "4000",
			// 	adress: "Arena, Berlin "
			// },
			// {
			// 	logo: "static/img/event-4.jpg",
			// 	date: "December 5 2019",
			// 	days: "30 days",
			// 	count: "4000",
			// 	adress: "Arena, Berlin "
			// },
			// {
			// 	logo: "static/img/event-4.jpg",
			// 	date: "December 5 2019",
			// 	days: "30 days",
			// 	count: "4000",
			// 	adress: "Arena, Berlin "
			// }
		],

	},
  mutations: {

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


