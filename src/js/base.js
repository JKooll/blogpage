// get config.yaml
function getConfig(path, key)
{
    return getRequest(path).then(response => {
        let config = jsyaml.load(response.body);

        if (key) {
            return Promise.resolve(eval('config.' + key));
        }

        return Promise.resolve(config);
    });
}

function getRequest(url)
{
    return Vue.http.get(url).then(response => {
        return Promise.resolve(response);
    });
}

function postRequest()
{

}