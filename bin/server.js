const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');

function normalizePort(val) {
    const port = parseInt(val, 10)
    
    if(isNaN(port)) {
        return val;
    }
    if(port >= 0){
        return port;
    }

    return false;
}

const port = normalizePort(process.env.PORT || 4100);
app.set('port', port);

// Handler Error
function onError(error) {
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ? 'Pipe' + port : 'Port' + port;

    switch(error.code){
        case 'EACCES':
            console.error(bind + ' require elevated privileges');
            process.exit(1);
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
        default:
            throw error;
    }
}

function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe' + addr : 'port' + addr.port;
    debug('Ouvindo na porta ' + bind);
}

const server = http.createServer(app);


server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log(`API executando em ${port}!`);
