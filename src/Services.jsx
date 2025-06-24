import axios from "axios"


const HOST = 'http://localhost:3000'

export class Service {
    

    async login(body){
        const url = HOST+"/user/login"
        const user = await axios.post(url, body);
        return user.data;
    }

     async addUser(body){
        const url = HOST+"/user"
        const user = await axios.post(url, body);
        return user.data;
    }
}