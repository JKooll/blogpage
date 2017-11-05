var vm = new Vue({
	el: "#app",
	
	data: {
		'posts': '',
		'title': ''
	},

	methods: {
		getResource: function(url, success, fail) {
			this.$http.get(url).then(success, fail);
		},
		postUrl: function(index) {
			return "post.html?id=" + index;
		},
		getConfig: function() {
			return getConfig('config.yml');
		},
		init: function() {
			//render title
			this.getConfig().then(config => {
				this.title = config.title;
			});

			//render post list
			let url = "posts/posts.json";

			let success = function (response) {
				this.$data.posts = response.body;
			};

			let fail = function (response) {
				alert('Not Found Page');
			};

			this.getResource(url, success, fail);
		}
	},
	
	mounted: mounted
});

//加载posts.json文件
function mounted() {
	this.init();
}
	






