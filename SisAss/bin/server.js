'use strict' //Força o JavaScript a ser critérioso (ponto e virgula e etc)
// Nota! No package.json está o script "start": "node ./bin/server.js" dando um "npm start" você pode iniciar o servidor. Pode ser fazer vários scripts lá
//Importando pacotes (Elas vem da pasta node_modules)
const app = require('../src/app');
const debug = require('debug')('SisAss:server'); //olha aula 3 qualquer coisa
const http = require('http');
const express = require('express');


//configurando a porta do servidor
const port = normalizePort(process.env.PORT || '80');
app.set('port', port);

//Instânciando o servidor
const server = http.createServer(app);

server.listen(port); 
server.on('error', onError);
server.on('listening', onListening);
console.log('localhost:'+ port);

//verifica a porta disponível | aula 04
function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)){
        return val;
    }

    if (port => 0){
        return port;
    }

    return false; 
};

//tratando alguns erros aula 05
function onError(error){
    if (erro.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe' + port:
        'Pipe' + port;
    switch (error.code) {
        case 'EACSS':
            console.error(bind + 'requeres elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

//debug
function onListening() {
    const addr = server.address();
    const bind = typeof addr ==='string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listenig on' + bind);
};