const env = dotenv.config();

//http://api.openweathermap.org/data/2.5/weather?id={cityid}}&APPID={apikey}

var app = new Vue({
    el: "#app",
    methods: {
        queryApi(){
            var apikey = process.env.APIKEY;
        }
    },
    data: {
        city: {
            Id: "",
            Name: "",
        }
    }
});