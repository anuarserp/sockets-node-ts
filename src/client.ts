import { Socket } from "net";

const socket = new Socket();

socket.connect({ host: "localhost", port: 8000 });
socket.setEncoding("utf-8");
socket.write("Anuar");
socket.on("data", (data: string) => {
  console.log(data);
});
