var vm = new Vue({
	el: "#post-list",
	
	data: {
		'posts': ''
	},

	methods: {
		getResource: function(url, success, fail) {
			this.$http.get(url).then(success, fail);
		},
		postUrl: function(index) {
			return "post.html?id=" + index;
		}
	},
	
	mounted: mounted
});

//加载posts.json文件
function mounted() {
	let url = "posts/posts.json";

	let success = function(response) {
		this.$data.posts = response.body;
	};

	let fail = function(response) {
		alert('Not Found Page');
	};

	this.getResource(url, success, fail);
}
	






