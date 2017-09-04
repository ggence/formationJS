var net = require('net');
var readline = require('readline');

var server = net.createServer(function(socket) {
    console.log('Serveur : Oh une connection!');

    socket.on('data', function(data) {

        console.log(data.toString());

        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Quelle est ta réponse ? ', (message) => {
            socket.write("HTTP/1.1 200 OK\n");
            socket.write("\n");
            socket.write(message);
            socket.end();
            rl.close();
        });

    });

    socket.on('end', function() {
        console.log("Serveur : Ah bientot!");
    });
});

server.listen(3001, '127.0.0.1');