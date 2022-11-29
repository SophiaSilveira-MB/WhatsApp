//enviar mensagem

var axios = require('axios');

var data = JSON.stringify({
  "token": "I9TX2uEojsVklfcPsczhPNMelNhN9INu4FMy",
  "from": "551130180960",
  "to": "5551994704000",
  "contents": [
    {
      "type": "template",
      "templateId": "6941a041-3fcd-48a6-b169-611aa7d5707d",
      "fields": {
        "body_1": "O",
        "body_2": "l",
        "body_3": "hello"
      }
    }
  ]
});

var config = {
  method: 'post',
  url: 'http://smart-api.smartnx.io/api/v3/whatsapp/send',
  headers: { 
    'X-Api-Token': '04d4fd449101f596dca167abdfb17f8582cefedfed4052485c0e2dfb0d065098', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});