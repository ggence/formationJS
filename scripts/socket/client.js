const net = require('net');
const client = net.createConnection({
    port: 80,
    host: "localhost"
}, () => {
    //'connect' listener
    console.log('connected to server!');
    client.write("GET / HTTP/1.1\r\n");
    client.write("Host: localhost\r\n\r\n");
});
client.on('data', (data) => {
    console.log(data.toString());
    client.end();
});
client.on('end', () => {
    console.log('disconnected from server');
});