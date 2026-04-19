const http = require("http");
const os = require("os");

const server = http.createServer(
  (req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end(`
        <h1>Load Balancer Test</h1>
        <p>Served by container: <strong style="color:green">${os.hostname()}</strong></p>
    `);
  },
);

server.listen(3000, () => {
  console.log(
    `Server running on port 3000 | Hostname: ${os.hostname()}`,
  );
});
