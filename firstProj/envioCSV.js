//teste ler as informações do csv e enviar uma mensagem com elas

var axios = require('axios');

//csv
const fs = require("fs");
const fastCsv = require("fast-csv");

const options = {
  //objectMode: true,
  delimiter: ";",
  quote: null,
  headers: true,
  renameHeaders: false,
};

const dataC = [];

fs.createReadStream("./arquivos/teste.csv")
  .pipe(fastCsv.parse(options))
  .on("error", (error) => {
    console.log(error);
  })
  .on("data", (row) => {
    dataC.push(row);
  })
  .on("end", (rowCount) => {
   
    for(var i=0, len = rowCount; i<len; i++) {
      var data = JSON.stringify({
        "token": "I9TX2uEojsVklfcPsczhPNMelNhN9INu4FMy",
        "from": "551130180960",
        "to": "55" + dataC[i].numero,
        "contents": [
          {
            "type": "template",
            "templateId": "6941a041-3fcd-48a6-b169-611aa7d5707d",
            "fields": {
              "body_1": dataC[i].primeiro,
              "body_2": dataC[i].segundo,
              "body_3": dataC[i].terceiro,
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

    }
      
  })