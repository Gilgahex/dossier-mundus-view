const finnhub = require('finnhub');



const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.FINNHUB_KEY //
const finnhubClient = new finnhub.DefaultApi()

// Earnings calendar
var today = Date.now()

y = today.getFullYear()
//Why the fuck does JS index months on 0
m = today.getMonth()+1

d = today.getDate()

from =
to = string

finnhubClient.earningsCalendar({"from": "2020-06-01", "to": "2020-06-30"}, (error, data, response) => {
    console.log(data)
});
