var vm = new Vue({
	el: "#app",
	data: {
		posts: '',
		post: '',
		content: '',
		id: 0,
		title: ''
	},
	watch: {
		posts: function(val, oldVal) {
			if (!val[this.id]) {
				alert('Not Found Page');
				return false;
			}
			this.post = val[this.id];
			this.getContent();
			this.renderPageTitle();
		}
	},
	methods: {
		getRequest: getRequest,
		getContent: getContent,
		getPostsJson: getPostsJson,
		renderPost: renderPost,
		renderPageTitle: renderPageTitle,
		init: init,
		getConfig: getConfig
	},
	mounted: mounted
});

function mounted() {
	// init page
	this.init();
}

function init()
{
	// get title
	this.getConfig().then(config => {
		this.title = config.title;
	});

	//获取id
	this.id = window.location.search.split('=')[1];

	//加载posts.json文件
	this.getPostsJson();
}

function getPostsJson()
{
	let url = "posts/posts.json";

	let success = function(response) {
		this.posts = response.body;
	};

	let fail = function(response) {
		alert('Not Found Page');
	};

	this.getRequest(url).then(success.bind(this), fail.bind(this));
}

function renderPost(mkString)
{
	return marked(mkString, {
			renderer: new marked.Renderer(),
  			gfm: true,
  			tables: true,
  			breaks: false,
  			pedantic: false,
  			sanitize: false,
  			smartLists: true,
			smartypants: true,
			highlight: highlight  
	});
}

function highlight(code, lang) 
{
	return Prism.highlight(code, eval("Prism.languages." + lang));
}

function getContent() 
{
	if(!this.post) {

		return this.content = '';
	}

	let url = 'posts/' + this.post.path;

	let success = function(response) {
		this.content = this.renderPost(response.bodyText);
	};

	let fail = function(response) {
		alert('Not Found Page');
	};

	this.getRequest(url).then(success.bind(this), fail.bind(this));
}

function renderPageTitle()
{
	document.querySelector("head title").textContent = this.post['title'];
}