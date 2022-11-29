//lER csv

// install fast-cs: npm i -S fast-csv

const fs = require("fs");
const fastCsv = require("fast-csv");

const options = {
  //objectMode: true,
  
  delimiter: ";",
  quote: null,
  headers: true,
  renameHeaders: false,
};

const data = [];

fs.createReadStream("./arquivos/teste.csv")
  .pipe(fastCsv.parse(options))
  .on("error", (error) => {
    console.log(error);
  })
  .on("data", (row) => {
    data.push(row);
  })
  .on("end", (rowCount) => {
    //mostra o número de linhas
    //console.log(rowCount);

    //mostra o array
    console.log(data);

    ////mostra a informação x do elemento de número = i, com o "indice celecionado" - cabeçalho
    /*for(var i=0, len = rowCount; i<len; i++) {
      console.log(data[i].ddd);
    }*/

        //o mesmo só que com forEach
    //data.forEach(number => console.log(number.ddd));
  });