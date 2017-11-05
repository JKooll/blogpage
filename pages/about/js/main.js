var app = new Vue({
    el: '#app',
    data: {
        author: '',
        title: '',
        post: ''
    },
    methods: {
        init: init,
        getConfig: getConfig,
        getPostConfig: getPostConfig,
        getRequest: getRequest
    },
    mounted: mounted
});

function mounted()
{
    this.init();
}

function init()
{
    // Set author, title
    this.getConfig().then(
        config => {
            this.author = config.author;
            this.title = config.title;
        }
    );

    this.getRequest('posts/about.md').then(response => {
        this.post = renderPost(response.body);
    })
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