var url="/ajax/index";
var screenWidth = document.body.clientWidth;
Vue.http.get(url).then(function(res){
	new Vue({
		el: '#app',
		data: {
			screenWidth: screenWidth,
			doubleScreenWidth: screenWidth*2,
			headerTabWidth: screenWidth/2-90,
			d: {
				top: 		res.body.items[0].data.data,
				hot: 		res.body.items[1].data.data,
				recommend:  res.body.items[2].data.data,
				female: 	res.body.items[3].data.data,
				male: 		res.body.items[4].data.data,
				free: 		res.body.items[5].data.data,
				topic: 		res.body.items[6].data.data
			},
			td:{
				duration:0,
				position:0,
				header_duration:0,
				header_position:0,
				tab_1_class:'Swipe-tab__on',
				tab_2_class:''
			}
		},
		methods:{
			tabSwitch: function(pos){
				this.td.duration = 0.5;
				this.td.header_duration = 0.5;
				if(pos == 0){
					this.td.position =0;
					this.td.header_position = 0;
					this.td.tab_1_class = "Swipe-tab__on";
					this.td.tab_2_class = "";
				}else{
					this.td.position = -this.screenWidth;
					this.td.header_position = this.headerTabWidth;
					this.td.tab_1_class = "";
					this.td.tab_2_class = "Swipe-tab__on";
				}
			},
			goto: function(id){
				location.href="/book?id="+id;
			}
		}
	});
});