import { SocketProvider } from "socket.io-react";
import io from "socket.io-client";

import App from "../App";

const socket = io.connect(process.env.SOCKET_URL);
socket.on("message", msg => console.log(msg));

const DOMNode = document.getElementById("renderTarget");

render(
  <SocketProvider socket={socket}>
    <App />
  </SocketProvider>,
  DOMNode
);
