var id = location.search.match(/(\?|&)id=([^&]*)(&|$)/i)[2];
var url="/ajax/book?id="+id;
var screenWidth = document.body.clientWidth;
Vue.http.get(url).then(function(res){
	new Vue({
		el: '#app',
		data: {
			screenWidth: screenWidth,
			d: res.body
		},
		methods:{
			readBook: function(){
				location.href = "/reader"
			}
		}
	});
});
