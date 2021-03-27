
import API from './api/api';

const signInService = async ({username, password}) => {
    await API.post(`createUser`, {
        username: username,
        password: password
    }).then(res => console.log(res))
}

export default signInService;