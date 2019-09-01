//importing axios
//We can install axios by npm install --save axios
import Axios from 'axios';

//The create method is going to create an instance of the axios client with defaulted properties
export default Axios.create({
    baseURL: 'https://api.unsplash.com', //The baseURL provides a base which can be appended to in uses of this instance
    
    //To make the request for unsplash we must identify ourselves, one of the ways is to use an authorization header as follows
    headers:{
        Authorization: 'Client-ID 123' //Authorization: Client-ID YOUR_ACCESS_KEY
    }
});