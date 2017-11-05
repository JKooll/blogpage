var app = new Vue({
    el: '#app',
    data: {
        configPath: 'config.yml',
        author: ''
    },
    methods: {
        init: init,
        getConfig: getConfig
    },
    mounted: mounted
});

function mounted()
{
    this.init();
}

function init()
{
    this.getConfig(this.configPath, 'author').then(
        author => {
            this.author = author;
        }
    );
}