import BaseAPI from "$root/pages/base.api";

const RestfulAPI = {
    generatetoken: (data) => BaseAPI.post('/auth', data)
}

export default RestfulAPI;