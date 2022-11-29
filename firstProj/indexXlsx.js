//Ler xlsx

// install xlsx = npm install xlsx

//talvez tenha que ser um import, caso precise https://www.npmjs.com/package/xlsx
const reader = require('xlsx')

// trazer o arquivo
const file = reader.readFile('./arquivos/Inspire.xlsx')

//array
let data = []

//se tiver mais de uma aba na planilha, SheetNames vai sera quantidade ex: (2)
const sheets = file.SheetNames

for(let i = 0; i < sheets.length; i++){
    const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])
    temp.forEach((res) => {
	data.push(res)
    })
}

// Mostra o array
//console.log(data)

//mostra só um elemento do array
//console.log(data[2])


for(var i=0, len = data.length; i<len; i++) {
    //console.log(data[i]);

    //mostra a informação x do elemento de número = i, com o "indice celecionado" - cabeçalho
    console.log(data[i].Perfil);
}