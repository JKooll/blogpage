// Get config.yaml file content.
function getConfig(key, default_val = '', path = 'config.yml')
{
    return getRequest(path).then(response => {
        let config = jsyaml.load(response.body);

        if (key) {
            return Promise.resolve(eval('config.' + key));
        }

        return Promise.resolve(config);
    });
}

/**
 * Get page config.
 * 
 * @param string path Path to pages.json 
 * @param string page Page name
 * 
 * @return json Page config.
 */
function getPagesConfig(path, page)
{
    if (page) {
        // Return page config.
    } else {
        // Return all pages config.
    }
}

/**
 * Get post config.
 * 
 * @param string path Path to posts.json.
 * @param string post Post title
 * 
 * @return json Page config.
 */
function getPostConfig(post)
{
    return getConfig('posts_dir').then(posts_dir => {
        return getRequest(posts_dir + 'posts.json');
    }).then(posts_config => {
        if (post) {
            for(let i = 0; i < posts_config.length; i++) {
                let current_post = posts_config[i];
                if (current_post.title == post) {
                    return resolve(current_post);
                }
            }

            return resolve(null);
        }

        return resolve(posts_config);
    });
}

/**
 * Get request.
 * 
 * @param string url
 * 
 * @return Promise 
 */
function getRequest(url)
{
    return Vue.http.get(url).then(response => {
        return Promise.resolve(response);
    });
}

/**
 * Post request.
 * 
 * @param string url
 * 
 * @param object data
 * 
 * @return Promise
 */
function postRequest(url, data)
{

}