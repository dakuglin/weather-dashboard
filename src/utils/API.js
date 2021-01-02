import axios from "axios";

export default {
  getWeather: function() {
    return axios.get('http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}')
  }
}



// export default {
//     getUser: function() {
//         return axios.get("https://randomuser.me/api/?results=10&nat=us")

//         //Maria the tutor provided me with this API to get all of the user information

//         //"https://randomuser.me/api/?results=200&nat=us"   

//         //https://jsonplaceholder.typicode.com/users
//     }
// };
