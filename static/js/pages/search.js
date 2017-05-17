var screenWidth = document.body.clientWidth;
new Vue({
	el: '#app',
	data: {
		screenWidth: screenWidth,
		str: "",
		init: true,
		result: "",
		noresult: false
	},
	methods:{
		search: function(){
			var data = this.str;
			if(data=="") return;
			this.init=false;
			var self = this;
			this.$http.get('/ajax/search', {
				params:{
					start:"",
					end:"",
					keyword: data
				}
			}).then(function(res){
				if(res.body.count==0){
					this.noresult = true;
				}
				self.result = res.body;
			});
		},
		searchthis: function(e){
			this.str = e.target.innerText;
			this.search();
		},
		goto: function(){
			location.href="/book?id=";
		}
	}
});