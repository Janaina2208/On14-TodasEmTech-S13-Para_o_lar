//cria a pasta geral, dentro cria server.js, readme, src com app.js dentro
//no git npm init -y npm i express npm i cors npm i nodemon
//cria o .gitignore e coloca o node_modules/ dentro
//1
const app = require('./src/app')
//2
const PORT = 3000
//3
app.listen(PORT, ()=>console.log("Servidor rodando na porta " + PORT))