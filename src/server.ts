import { Server } from "net";

const server = new Server();

//Socket Conexión
server.on("connection", (socket) => {
  console.log(
    `New Connection from ${socket.remoteAddress}:${socket.remotePort}`
  );
  socket.setEncoding("utf-8");
  socket.on("data", (data: string) => {
    socket.write(data);
  });
});

server.listen({ port: 8000, host: "0.0.0.0" }, () => {
  console.log("server in port 8000");
});
