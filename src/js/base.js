// get config.yaml
function getConfig(path)
{
    return getRequest(path).then(response => {
        let config = jsyaml.load(response.body);
        
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