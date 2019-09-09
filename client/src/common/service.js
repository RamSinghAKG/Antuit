import config from 'src/config';
export const url = {
    createUser: '/user/create',
    updateUser: '/user/update',
    getUsers: '/user/',
    createRole: '/role/create',
    updateRole: '/role/update',
    getRoles: '/role/'
}
export const postData = (url, data) => {
    const options = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    return fetchJSON(url, options);
}
export const updateData = (url, data) => {
    const options = {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    return fetchJSON(url, options);
}
export const getData = (url) => {
    const options = {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetchJSON(url, options);

}
async function fetchJSON(url, options){
    let absoluteUrl = config.apiserver + url;
    return await fetch(absoluteUrl, options)
        .then(status)
        .then(json)
        .then(function (data) {
            console.log('Request succeeded: ', url);
            return Promise.resolve(data);
        }).catch(function (error) {
            console.log('Request failed', error);
            return Promise.reject(error);
        });
}
function status(response) {
    if (response.status === 200) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response));
    }
}
function json(response) {
    return response.json();
}
